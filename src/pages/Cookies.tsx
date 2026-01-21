import EnhancedLayout from "@/components/EnhancedLayout";

const Cookies = () => {
    return (
        <EnhancedLayout>
            <div className="container mx-auto px-4 py-20 min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
                <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        This is the Cookie Policy for Kiddo Arabia, accessible from kiddo-arabia.com.
                    </p>
                    <h2>What Are Cookies</h2>
                    <p>
                        As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.
                    </p>
                    <h2>How We Use Cookies</h2>
                    <p>
                        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
                    </p>
                    <p className="text-muted-foreground italic mt-8">
                        [This is a simplified placeholder. Complete cookie policy content to be added.]
                    </p>
                </div>
            </div>
        </EnhancedLayout>
    );
};

export default Cookies;
