"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full wellness-gradient -z-10" />
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-accent uppercase bg-secondary/50 rounded-full">
                        Inovação e Sofisticação
                    </span>
                    <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-[1.1]">
                        Recupere sua <span className="text-primary italic">Autoestima</span> com Tratamentos Sofisticados.
                    </h1>
                    <p className="mb-8 text-xl text-foreground/80 font-sans leading-relaxed">
                        Realçamos sua beleza única com protocolos exclusivos na Ilha Amarela, Salvador.
                        Uma experiência premium para quem valoriza resultados naturais.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://wa.me/5571987828343"
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            <MessageCircle size={20} />
                            AGENDAREI MINHA AVALIAÇÃO AGORA
                        </Link>
                        <Link
                            href="#procedimentos"
                            className="px-8 py-4 border-2 border-primary/20 text-foreground font-semibold rounded-lg hover:bg-primary/5 transition-all text-center"
                        >
                            Conheça nossos Procedimentos
                        </Link>
                    </div>
                </motion.div>

                {/* Placeholder for Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative aspect-[4/5] bg-secondary/30 rounded-2xl overflow-hidden border-8 border-white shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1596704017254-9b121068fb21?auto=format&fit=crop&q=80&w=800"
                        alt="Mulher com pele radiante"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
