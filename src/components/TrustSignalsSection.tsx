import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, CheckCircle } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const TrustSignalsSection = () => {
    const { t } = useTranslation();

    const certifications = [
        {
            icon: ShieldCheck,
            label: t('trust.iso'),
            description: t('trust.iso.desc')
        },
        {
            icon: Leaf,
            label: t('trust.natural'),
            description: t('trust.natural.desc')
        },
        {
            icon: Award,
            label: t('trust.quality'),
            description: t('trust.quality.desc')
        },
        {
            icon: CheckCircle,
            label: t('trust.nutritionist'),
            description: t('trust.nutritionist.desc')
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 300, damping: 20 }
        }
    };

    return (
        <section className="py-12 bg-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center gap-3 group"
                        >
                            <motion.div
                                className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 relative"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <cert.icon className="w-8 h-8 text-primary relative z-10" />
                                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            </motion.div>
                            <div>
                                <h3 className="font-bold text-foreground text-sm lg:text-base mb-1">
                                    {cert.label}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSignalsSection;
