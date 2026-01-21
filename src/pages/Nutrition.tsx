import EnhancedLayout from "@/components/EnhancedLayout";

const Nutrition = () => {
    return (
        <EnhancedLayout>
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Nutrition Guide</h1>
                <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                    <p className="text-xl text-center text-muted-foreground mb-12">
                        Explore the nutritional benefits of our ingredients and how they support your child's growth.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Nutrients</h2>
                            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                <li>Protein for muscle growth</li>
                                <li>Fiber for healthy digestion</li>
                                <li>Vitamins and Minerals including B12, Iron, and Zinc</li>
                            </ul>
                        </div>
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Promise</h2>
                            <p className="text-muted-foreground">
                                We ensure that every product is balanced and nutritious, designed specifically for growing kids.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Nutrition;
