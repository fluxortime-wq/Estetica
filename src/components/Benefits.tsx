"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartPulse, Clock } from "lucide-react";

const benefits = [
    {
        icon: <Sparkles className="text-primary" size={32} />,
        title: "Protocolos Personalizados",
        description: "Tratamos cada rosto e corpo como único, focando na sua individualidade."
    },
    {
        icon: <HeartPulse className="text-primary" size={32} />,
        title: "Ambiente Premium",
        description: "Conforto e sofisticação planejados para sua melhor experiência de cuidado."
    },
    {
        icon: <ShieldCheck className="text-primary" size={32} />,
        title: "Biossegurança Rigorosa",
        description: "Sua segurança e saúde são nossa prioridade absoluta em cada detalhe."
    },
    {
        icon: <Clock className="text-primary" size={32} />,
        title: "Atendimento Pontual",
        description: "Respeito ao seu tempo com profissionais altamente especializados."
    }
];

export default function Benefits() {
    return (
        <section className="py-24 bg-secondary/20 px-6">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Por que nos escolher</h2>
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-16">
                    O Padrão Premium que Você Merece
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6 flex justify-center">{benefit.icon}</div>
                            <h4 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h4>
                            <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
