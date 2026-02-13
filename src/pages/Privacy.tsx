import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";

import { useTranslation } from "@/contexts/TranslationContext";

const Privacy = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "سياسة الخصوصية - كيدو أرابيا | حماية البيانات"
                    : "Privacy Policy - Kiddo Arabia | Data Protection"}
                description={language === 'ar'
                    ? "تعرف كيف تجمع كيدو أرابيا بياناتك الشخصية وتستخدمها وتحميها. اقرأ سياسة الخصوصية الخاصة بنا لمزيد من المعلومات حول حقوقك."
                    : "Learn how Kiddo Arabia collects, uses, and protects your personal data. Read our Privacy Policy for more information on your rights."}
                keywords={language === 'ar'
                    ? "سياسة خصوصية, حماية بيانات, بيانات شخصية, حقوق خصوصية, خصوصية كيدو أرابيا"
                    : "privacy policy, data protection, personal data, privacy rights, kiddo arabia privacy"}
                lang={language}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        At Kiddo Arabia, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                    <h2>1. Important Information and Who We Are</h2>
                    <p>
                        Kiddo Arabia is the controller and responsible for your personal data.
                    </p>
                    <h2>2. The Data We Collect About You</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, and Marketing and Communications Data.
                    </p>
                    <p className="text-muted-foreground italic mt-8">
                        [This is a simplified placeholde. Complete policy content to be added.]
                    </p>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Privacy;
