import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { useTranslation } from "@/contexts/TranslationContext";

const FAQ = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "الأسئلة الشائعة كيدو أرابيا - إجابات على الأسئلة الشائعة"
                    : "Frequently Asked Questions - Kiddo Arabia Help & Support"}
                description={language === 'ar'
                    ? "اعثر على إجابات للأسئلة الشائعة حول منتجات كيدو أرابيا، المكونات، الشحن، والمزيد. نحن هنا لمساعدة الآباء على اتخاذ خيارات مستنيرة."
                    : "Find answers to common questions about Kiddo Arabia products, ingredients, delivery, and more."}
                keywords={language === 'ar'
                    ? "أسئلة شائعة كيدو أرابيا, أسئلة تغذية, معلومات شحن, دعم عملاء, مساعدة أبوية"
                    : "faq, kiddo arabia questions, shipping, ingredients, allergens, support"}
                lang={language}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": language === 'ar' ? "ما هي المكونات المستخدمة؟" : "What ingredients do you use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": language === 'ar' ? "نستخدم أفضل المكونات الطبيعية فقط. منتجاتنا خالية من المواد الحافظة والإضافات الصناعية." : "We use only the finest natural ingredients, sourced responsibly. Our products are free from artificial preservatives and additives."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": language === 'ar' ? "هل منتجاتكم خالية من مسببات الحساسية؟" : "Are your products allergen-free?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": language === 'ar' ? "نأخذ الحساسية على محمل الجد. يرجى التحقق من عبوة المنتج للحصول على معلومات محددة. لدينا أيضًا صفحة خاصة بمعلومات الحساسية." : "We take allergies seriously. Please check individual product packaging for specific allergen information. We also have a dedicated Allergen Info page."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": language === 'ar' ? "أين تقومون بالتوصيل؟" : "Where do you deliver?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": language === 'ar' ? "نقوم حاليًا بالتوصيل في جميع المدن الرئيسية في مصر. تحقق من معلومات التوصيل عند الدفع لمزيد من التفاصيل." : "We currently deliver across major cities in Egypt. Check our delivery information at checkout for more details."
                            }
                        }
                    ]
                }}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h1>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What ingredients do you use?</AccordionTrigger>
                            <AccordionContent>
                                We use only the finest natural ingredients, sourced responsibly. Our products are free from artificial preservatives and additives.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Are your products allergen-free?</AccordionTrigger>
                            <AccordionContent>
                                We take allergies seriously. Please check individual product packaging for specific allergen information. We also have a dedicated Allergen Info page.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Where do you deliver?</AccordionTrigger>
                            <AccordionContent>
                                We currently deliver across major cities in Egypt. Check our delivery information at checkout for more details.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default FAQ;
