import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import { useTranslation } from "@/contexts/TranslationContext";

const Allergens = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "معلومات الحساسية - كيدو أرابيا | سلامة الغذاء"
                    : "Allergen Information - Kiddo Arabia Food Safety"}
                description={language === 'ar'
                    ? "معلومات تفصيلية عن مسببات الحساسية لجميع منتجات كيدو أرابيا. نحن نعطي الأولوية لسلامة الغذاء والشفافية للحفاظ على سلامة أطفالك."
                    : "Important allergen information for Kiddo Arabia products. Read about potential allergens like nuts, dairy, wheat, and soy."}
                keywords={language === 'ar'
                    ? "معلومات حساسية طعام, خالي من الجلوتين, تحذيرات مكسرات, مكونات, سلامة طعام أطفال"
                    : "allergen info, food safety, allergies, nut free, dairy free, wheat, soy, kiddo arabia allergens"}
                lang={language}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Allergen Information</h1>
                <div className="max-w-3xl mx-auto">
                    <Alert variant="destructive" className="mb-8">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Important Note</AlertTitle>
                        <AlertDescription>
                            Always read the product label for the most accurate and up-to-date allergen information.
                        </AlertDescription>
                    </Alert>

                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <h3 className="text-xl font-semibold mb-2">Common Allergens</h3>
                            <p className="text-muted-foreground">
                                Some of our products may contain or be processed in facilities that handle nuts, dairy, wheat, and soy. Please refer to individual product pages for specific details.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <h3 className="text-xl font-semibold mb-2">Cross-Contamination</h3>
                            <p className="text-muted-foreground">
                                While we take strict measures to prevent cross-contamination, we cannot guarantee completely allergen-free environments for severe allergies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Allergens;
