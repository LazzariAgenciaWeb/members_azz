import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    service: Service;
    className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
    return (
        <Link
            href={service.href}
            className={cn(
                "group relative flex h-[200px] w-[350px] flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-md border border-white/10 bg-card transition-all hover:scale-105 hover:border-white/20 hover:shadow-2xl",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            {/* Placeholder for image if we had one, using a gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors" />

            <div className="relative z-20 mt-auto p-4">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                </h3>
                <p className="line-clamp-2 text-xs text-gray-300">
                    {service.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                    {service.status === 'active' && (
                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                            Ativo
                        </span>
                    )}
                    {service.status === 'available' && (
                        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500 ring-1 ring-inset ring-blue-500/20">
                            Disponível
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
