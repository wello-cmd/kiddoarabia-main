import EnhancedLayout from "@/components/EnhancedLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
    return (
        <EnhancedLayout>
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
