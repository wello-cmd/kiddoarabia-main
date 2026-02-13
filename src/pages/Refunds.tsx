import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";

import { useTranslation } from "@/contexts/TranslationContext";

const Refunds = () => {
    const { language } = useTranslation();
    return (
        <EnhancedLayout>
            <SEOHead
                title={language === 'ar'
                    ? "سياسة الاسترجاع والاسترداد - كيدو أرابيا | خدمة العملاء"
                    : "Returns & Refunds Policy - Kiddo Arabia | Customer Service"}
                description={language === 'ar'
                    ? "افهم سياسة الاسترجاع والاسترداد الخاصة بكيدو أرابيا. نحن نريد أن تكون راضياً عن مشترياتك."
                    : "Understand Kiddo Arabia's return and refund policy. We want you to be satisfied with your purchase."}
                keywords={language === 'ar'
                    ? "سياسة استرداد, استرجاع, استرجاع كيدو أرابيا, خدمة عملاء, ضمان شراء"
                    : "refund policy, returns, kiddo arabia returns, customer service, purchase guarantee"}
                lang={language}
            />
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Refund Policy</h1>
                <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Thank you for shopping at Kiddo Arabia. If you are not entirely satisfied with your purchase, we're here to help.
                    </p>
                    <h2>Returns</h2>
                    <p>
                        You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it.
                    </p>
                    <h2>Refunds</h2>
                    <p>
                        Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
                    </p>
                    <p className="text-muted-foreground italic mt-8">
                        [This is a simplified placeholder. Complete refund policy content to be added.]
                    </p>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Refunds;
