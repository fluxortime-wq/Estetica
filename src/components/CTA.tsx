"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 px-6 wellness-gradient">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-primary/10"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                        O Momento de Cuidar de Você é <span className="text-primary italic">Agora</span>.
                    </h2>
                    <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Junte-se a centenas de mulheres em Salvador que escolheram nossa clínica por sua segurança, sofisticação e resultados naturais.
                    </p>

                    <Link
                        href="https://wa.me/5571987828343"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        <MessageCircle size={24} />
                        QUERO AGENDAR PELO WHATSAPP
                    </Link>

                    <p className="mt-8 text-sm text-foreground/40 uppercase tracking-widest font-semibold italic">
                        Atendimento Exclusivo na Ilha Amarela
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
