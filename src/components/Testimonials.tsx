"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Mariana S.",
        location: "Salvador - BA",
        text: "Amei o atendimento! Me senti super acolhida e o resultado do meu procedimento ficou incrivelmente natural. Recomendo de olhos fechados!",
        rating: 5
    },
    {
        name: "Fernanda L.",
        location: "Ilha Amarela, Salvador",
        text: "Profissionais excelentes e ambiente maravilhoso. Finalmente encontrei uma clínica de confiança na região.",
        rating: 5
    },
    {
        name: "Carla M.",
        location: "Salvador - BA",
        text: "Minha autoestima mudou completamente. O cuidado e a atenção que recebi fizeram toda a diferença no resultado final.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-secondary/10 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Experiências Reais</h2>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                        O que dizem nossas clientes
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white rounded-2xl shadow-sm border border-primary/5 italic relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-foreground/80 mb-8 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div>
                                <p className="font-bold text-foreground">{t.name}</p>
                                <p className="text-sm text-primary uppercase tracking-tighter">{t.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
