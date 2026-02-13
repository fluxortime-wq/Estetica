"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link
                        href="https://wa.me/5571987828343"
                        target="_blank"
                        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
                    >
                        <MessageCircle size={32} />
                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-foreground text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Dúvidas? Fale conosco!
                        </span>
                        {/* Pulse Effect */}
                        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
