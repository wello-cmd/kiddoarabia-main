import EnhancedLayout from "@/components/EnhancedLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <EnhancedLayout>
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
