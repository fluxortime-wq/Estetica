"use client";

import { motion } from "framer-motion";

const procedures = [
    {
        title: "Harmonização Facial",
        description: "Equilíbrio e simetria para um rosto mais jovem e marcante, respeitando seus traços naturais.",
        tag: "Destaque",
        image: "https://images.unsplash.com/photo-1616391182219-a080b4d1043a?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Toxina Botulínica",
        description: "Suavize linhas de expressão e previna rugas com a segurança e precisão que você merece.",
        tag: "Preventivo",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Preenchimento Labial",
        description: "Volume e contorno na medida certa para lábios hidratados, simétricos e sofisticados.",
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Bioestimuladores",
        description: "Recupere a firmeza e a produção de colágeno da sua pele com resultados progressivos.",
        tag: "Regeneração",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
    }
];

export default function Procedures() {
    return (
        <section id="procedimentos" className="py-24 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Especialidades</h2>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                        Tratamentos Consagrados
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {procedures.map((proc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-secondary/10 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-secondary/20 transition-all duration-300 overflow-hidden"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={proc.image}
                                    alt={proc.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">
                                        {proc.tag}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/50 border border-primary/20 flex items-center justify-center text-primary font-playfair italic text-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {proc.title}
                                </h4>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    {proc.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
