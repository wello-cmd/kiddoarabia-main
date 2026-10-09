import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import OpenAI from "openai";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AiBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const { t, language } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message based on language
  const getWelcomeMessage = () => {
    if (language === 'ar') {
      return "مرحباً! أنا مساعد كيدو الذكي. اسألني عن منتجاتنا والتغذية والوصفات!";
    }
    return "Hi! I'm Kiddo AI Assistant. Ask me anything about our products, nutrition, and recipes!";
  };

  // Initialize messages when component mounts or language changes
  React.useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ 
        text: getWelcomeMessage(), 
        isBot: true, 
        timestamp: new Date() 
      }]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Product knowledge base
  const productKnowledge = `
  Kiddo Arabia Product Information:
  
  Products:
  1. Classic Cornflakes - Our original cornflakes made with natural corn and fortified with vitamins
  2. Choco Pops - Chocolate-flavored cereal balls loved by kids
  3. Honey Rings - Sweet honey-flavored ring cereal
  4. Strawberry Pillows - Pillowy cereal with real strawberry flavor
  5. Banana Pillows - Soft banana-flavored cereal pillows
  6. Crunchy Pillows - Extra crunchy cereal pillows
  7. Choco Rice - Chocolate rice cereal
  8. Choco Creamo - Creamy chocolate cereal
  9. Cocoa Scoops - Cocoa-flavored scooped cereal
  10. Fruit Rings - Mixed fruit-flavored ring cereal
  11. Choco Flakes - Chocolate-flavored cornflakes

  All products are:
  - Made with natural ingredients
  - Fortified with essential vitamins (Vitamin D, Iron, B-vitamins)
  - Suitable for children aged 2 and above
  - Available across Middle East and North Africa

  Recipes available:
  - Classic Cornflakes Bowl
  - Cornflakes Energy Bars  
  - Cornflakes Cookies
  - Cornflakes Ice Cream Sundae
  - Cornflakes Smoothie Bowl
  - Cornflakes Crusted Chicken

  Company: Family-owned business focused on healthy nutrition for growing children.
  `;

  const callOpenRouter = async (userMessage: string): Promise<string> => {
    if (!apiKey) {
      return language === 'ar' 
        ? "أحتاج إلى مفتاح API للاتصال بالذكاء الاصطناعي. يرجى إدخال مفتاح OpenRouter API الخاص بك."
        : "I need an API key to connect to AI. Please enter your OpenRouter API key.";
    }

    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: "https://openrouter.ai/api/v1",
        dangerouslyAllowBrowser: true
      });

      const systemPrompt = language === 'ar' ? `
      أنت مساعد كيدو الذكي، مساعد ودود ومفيد لعلامة كيدو التجارية للحبوب الصحية للأطفال. تحدث بطريقة ودودة ومناسبة للأطفال، وليس بطريقة آلية.

      معلومات المنتجات: ${productKnowledge}

      إرشادات:
      - أجب باللغة العربية دائماً
      - كن ودوداً ومفيداً ومناسباً للأطفال  
      - ركز على منتجات وتغذية كيدو
      - إذا كان السؤال غير متعلق أو غير واضح، قل: "ما زلت أتعلم! دعني أنقل رسالتك لأحد أعضاء الفريق. في هذه الأثناء، هل يمكنني مساعدتك بأي شيء آخر؟"
      - تذكر المحادثات السابقة في هذه الجلسة
      ` : `
      You are Kiddo AI Assistant, a friendly and helpful assistant for Kiddo Arabia, a healthy kids' cereal brand. Speak in a friendly, child-friendly way, never robotic.

      Product Information: ${productKnowledge}

      Guidelines:
      - Always respond in English
      - Be friendly, helpful, and child-friendly
      - Focus on Kiddo products and nutrition
      - If the question is irrelevant or unclear, say: "I'm still learning! Let me pass your message to a team member. In the meantime, can I help with anything else?"
      - Remember previous conversations in this session
      `;

      const completion = await openai.chat.completions.create({
        model: "anthropic/claude-3.5-sonnet",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.7
      });

      return completion.choices[0]?.message?.content || (
        language === 'ar' 
          ? "آسف، حدث خطأ. يرجى المحاولة مرة أخرى."
          : "Sorry, there was an error. Please try again."
      );
    } catch (error) {
      console.error('OpenRouter API error:', error);
      return language === 'ar' 
        ? "عذراً، لا أستطيع الاتصال بالذكاء الاصطناعي حالياً. يرجى التحقق من مفتاح API أو المحاولة لاحقاً."
        : "Sorry, I can't connect to AI right now. Please check your API key or try again later.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    const newUserMessage: Message = { 
      text: userMessage, 
      isBot: false, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await callOpenRouter(userMessage);
      const botMessage: Message = { 
        text: response, 
        isBot: true, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { 
        text: language === 'ar' 
          ? "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى."
          : "Sorry, there was an error. Please try again.", 
        isBot: true, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (!apiKey) {
      setShowApiKeyInput(true);
    }
    if (messages.length === 1) {
      // Update welcome message for current language
      setMessages([{ 
        text: getWelcomeMessage(), 
        isBot: true, 
        timestamp: new Date() 
      }]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-50">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg">
              {language === 'ar' ? 'مساعد كيدو الذكي' : 'Kiddo AI Assistant'}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            {/* API Key Input */}
            {showApiKeyInput && (
              <div className="mb-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">
                  {language === 'ar' ? 'أدخل مفتاح OpenRouter API:' : 'Enter your OpenRouter API key:'}
                </p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-or-..."
                    className="flex-1 px-2 py-1 text-xs border rounded"
                  />
                  <Button 
                    size="sm" 
                    onClick={() => setShowApiKeyInput(false)}
                    disabled={!apiKey.trim()}
                  >
                    {language === 'ar' ? 'حفظ' : 'Save'}
                  </Button>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.isBot 
                      ? 'bg-muted text-muted-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {language === 'ar' ? 'يكتب...' : 'Typing...'}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex gap-2">
              {!apiKey && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowApiKeyInput(true)}
                  className="text-xs"
                >
                  API
                </Button>
              )}
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder={language === 'ar' ? 'اسأل عن منتجات كيدو...' : 'Ask about Kiddo products...'}
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
                disabled={isLoading}
              />
              <Button size="sm" onClick={handleSend} disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AiBot;