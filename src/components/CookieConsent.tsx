import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const { t, language } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(minimal));
    setPreferences(minimal);
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {language === 'ar' ? 'استخدام ملفات تعريف الارتباط' : 'Cookie Usage'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' 
                      ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع. يمكنك إدارة تفضيلاتك أدناه.'
                      : 'We use cookies to improve your experience and analyze site usage. You can manage your preferences below.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'إعدادات' : 'Settings'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRejectAll}
                >
                  {language === 'ar' ? 'رفض الكل' : 'Reject All'}
                </Button>
                <Button 
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  <Check className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'قبول الكل' : 'Accept All'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  {language === 'ar' ? 'إعدادات ملفات تعريف الارتباط' : 'Cookie Settings'}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'ضرورية' : 'Necessary'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'مطلوبة لعمل الموقع الأساسي'
                        : 'Required for basic site functionality'
                      }
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'مطلوبة دائماً' : 'Always Required'}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'التحليلات' : 'Analytics'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'تساعدنا في فهم كيفية استخدام الموقع'
                        : 'Help us understand how the site is used'
                      }
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'التسويق' : 'Marketing'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' 
                        ? 'لعرض إعلانات مخصصة'
                        : 'For personalized advertisements'
                      }
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="rounded"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={handleRejectAll}>
                  {language === 'ar' ? 'رفض الكل' : 'Reject All'}
                </Button>
                <Button onClick={handleSavePreferences}>
                  {language === 'ar' ? 'حفظ التفضيلات' : 'Save Preferences'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;