import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "@/contexts/TranslationContext";

const testimonials = [
    {
        id: 1,
        name: "Sarah Ahmed",
        role: "Mother of 2",
        content: "My picky eaters absolutely love the Oat Jars! Finally found something healthy that they actually ask for. The banana choco flavor is a lifesaver.",
        rating: 5,
        avatar: "/avatars/sarah.jpg",
        initials: "SA"
    },
    {
        id: 2,
        name: "Dr. Omar Khaled",
        role: "Pediatrician & Dad",
        content: "As a doctor, I'm always skeptical about 'healthy' claims, but Kiddo Arabia delivers. The ingredient list is clean, natural, and nutritionally balanced.",
        rating: 5,
        avatar: "/avatars/omar.jpg",
        initials: "OK"
    },
    {
        id: 3,
        name: "Laila M.",
        role: "Fitness Instructor",
        content: "The cereals give my kids the energy they need for sports without the sugar crash. High quality packaging and amazing taste.",
        rating: 5,
        avatar: "/avatars/laila.jpg",
        initials: "LM"
    }
];

const TestimonialsSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
                </div>

                <motion.div
                    className="text-center mb-16 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
                        <Star className="w-6 h-6 text-secondary fill-secondary" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="mb-6">
                                        <Quote className="w-10 h-10 text-primary/20" />
                                    </div>

                                    <div className="flex-grow mb-6">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                                            ))}
                                        </div>
                                        <p className="text-lg text-foreground/80 leading-relaxed italic">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                                        <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                {testimonial.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
