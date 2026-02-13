"use client";

import { MessageCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Location() {
    return (
        <section id="localizacao" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info Card */}
                    <div className="bg-secondary/20 p-10 rounded-3xl border border-primary/10">
                        <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">Onde Estamos</h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-lg mb-1">Nosso Endereço</p>
                                    <p className="text-foreground/70 leading-relaxed">
                                        Rua Carlos Chagas 30 Q-40, 1° Andar<br />
                                        Ilha Amarela, Salvador - BA<br />
                                        CEP: 40715-040
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-lg mb-1">Dúvidas e Agendamentos</p>
                                    <Link
                                        href="https://wa.me/5571987828343"
                                        target="_blank"
                                        className="text-primary font-bold text-xl hover:underline"
                                    >
                                        (71) 98782-8343
                                    </Link>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-lg mb-1">Horário de Atendimento</p>
                                    <p className="text-foreground/70 uppercase text-sm tracking-wide">Segunda à Sexta: 08h às 18h<br />Sábado: 08h às 12h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="rounded-3xl overflow-hidden min-h-[400px] border-8 border-secondary/10 bg-secondary/5 relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-primary/30">
                            <MapPin size={48} className="mb-4" />
                            <p className="text-xl font-playfair italic">
                                [Incorporar Google Maps aqui para: Rua Carlos Chagas 30, Ilha Amarela, Salvador]
                            </p>
                        </div>
                        {/* Note for the user: You can swap this for a real iframe */}
                    </div>
                </div>
            </div>

            <footer className="mt-24 border-t border-primary/10 pt-12 pb-8 text-center">
                <p className="text-foreground/40 text-sm tracking-widest uppercase">
                    © 2026 Clínica de Estética | Salvador - BA | Realçando sua Beleza Natural
                </p>
            </footer>
        </section>
    );
}
