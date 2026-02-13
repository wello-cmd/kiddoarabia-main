import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useTranslation } from "@/contexts/TranslationContext";

const Careers = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "وظائف في كيدو أرابيا - انضم إلى فريقنا"
                    : "Careers at Kiddo Arabia - Join Our Team"}
                description={language === 'ar'
                    ? "انضم إلى فريق كيدو أرابيا وساعدنا في بناء مستقبل أكثر صحة للأطفال. عرض الوظائف المتاحة والتقديم اليوم."
                    : "Join the Kiddo Arabia family! We are looking for passionate individuals to help us provide healthy and delicious nutrition for children. Check our open positions."}
                keywords={language === 'ar'
                    ? "وظائف كيدو أرابيا, وظائف مصر, وظائف صناعة غذائية, انضم إلينا, فرص عمل"
                    : "careers, kiddo arabia jobs, employment, work with us, kids nutrition careers, join our team"}
                lang={language}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-6 text-foreground">Careers at Kiddo Arabia</h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                    We are always looking for passionate individuals to join our mission of nourishing young minds and bodies.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                    Currently, we don't have any open positions properly listed here, but feel free to send us your resume!
                </p>
                <Button asChild size="lg" variant="kiddo">
                    <Link to="/contact">Contact Us</Link>
                </Button>
            </div>
        </EnhancedLayout>
    );
};

export default Careers;
