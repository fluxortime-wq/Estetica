"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="sobre" className="py-24 bg-white px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square bg-secondary rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-primary/30 p-12 text-center text-xl italic font-playfair">
                            [Espaço para Foto Real da Clínica ou Especialista na Ilha Amarela]
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Sobre Nós</h2>
                        <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
                            Um refúgio de cuidado e bem-estar em <span className="text-primary">Salvador</span>.
                        </h3>
                        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                            <p>
                                Localizada na Rua Carlos Chagas em Salvador – BA, nossa clínica nasceu para ser mais que um centro de estética: um espaço de acolhimento e transformação.
                            </p>
                            <p>
                                Unimos tecnologia de ponta a um atendimento verdadeiramente humanizado, focado em entender as necessidades de cada mulher para entregar resultados que respeitam sua essência e harmonia natural.
                            </p>
                            <p className="font-semibold text-foreground">
                                Aqui, seu bem-estar é nossa prioridade absoluta, do agendamento ao pós-procedimento.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
