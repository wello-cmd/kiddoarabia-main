import EnhancedLayout from "@/components/EnhancedLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Press = () => {
    return (
        <EnhancedLayout>
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-6 text-foreground">Press & Media</h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                    Latest news, updates, and media resources about Kiddo Arabia.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                    For media inquiries, please reach out to our PR team.
                </p>
                <Button asChild size="lg" variant="kiddo">
                    <Link to="/contact">Contact PR Team</Link>
                </Button>
            </div>
        </EnhancedLayout>
    );
};

export default Press;
