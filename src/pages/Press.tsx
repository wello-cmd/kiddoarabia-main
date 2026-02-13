import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useTranslation } from "@/contexts/TranslationContext";

const Press = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "أخبار وميديا كيدو أرابيا | آخر الأخبار"
                    : "Press & Media - Kiddo Arabia | Latest News"}
                description={language === 'ar'
                    ? "آخر الأخبار، البيانات الصحفية، والتغطية الإعلامية لكيدو أرابيا. ابق على اطلاع بإعلانات شركتنا."
                    : "Stay updated with Kiddo Arabia press releases, media coverage, and company news. Discover our latest announcements."}
                keywords={language === 'ar'
                    ? "أخبار كيدو أرابيا, بيانات صحفية, تغطية إعلامية, أخبار شركة, جديد كيدو"
                    : "kiddo arabia press, media, news, press releases, company updates, brand news"}
                lang={language}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-6 text-foreground">Press & Media</h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                    Latest news, updates, and media resources about Kiddo Arabia.
                </p>

            </div>
        </EnhancedLayout>
    );
};

export default Press;
