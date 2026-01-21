import EnhancedLayout from "@/components/EnhancedLayout";

const Terms = () => {
    return (
        <EnhancedLayout>
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
                <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Welcome to Kiddo Arabia. These terms and conditions outline the rules and regulations for the use of Kiddo Arabia's Website.
                    </p>
                    <h2>1. Introduction</h2>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use Kiddo Arabia if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                    <h2>2. License</h2>
                    <p>
                        Unless otherwise stated, Kiddo Arabia and/or its licensors own the intellectual property rights for all material on Kiddo Arabia. All intellectual property rights are reserved.
                    </p>
                    <p className="text-muted-foreground italic mt-8">
                        [This is a simplified placeholder. Complete terms content to be added.]
                    </p>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Terms;
