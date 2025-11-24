import { Navbar } from "@/components/layout/navbar";
import { ServiceCard } from "@/components/ui/service-card";
import { Service } from "@/types";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const activeServices: Service[] = [
    {
        id: "website",
        title: "Criação de Site",
        description: "Desenvolvimento do seu novo site institucional.",
        status: "active",
        thumbnailUrl: "/placeholder",
        href: "/services/website",
    },
    {
        id: "social-media",
        title: "Gestão de Redes Sociais",
        description: "Planejamento e postagens para Instagram e LinkedIn.",
        status: "active",
        thumbnailUrl: "/placeholder",
        href: "/services/social-media",
    },
];

const availableServices: Service[] = [
    {
        id: "marketing",
        title: "Marketing Digital",
        description: "Campanhas de tráfego pago para aumentar suas vendas.",
        status: "available",
        thumbnailUrl: "/placeholder",
        href: "/services/marketing",
    },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-50" />

                <div className="relative z-20 flex h-full flex-col justify-center px-4 md:px-16">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Acompanhe o progresso do seu Site
                    </h1>
                    <p className="mt-4 max-w-lg text-lg text-gray-300">
                        Seu projeto está na fase de desenvolvimento. Veja as próximas etapas e aprove o design.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button size="lg" className="gap-2 font-bold text-lg px-8">
                            <Play className="fill-current" />
                            Ver Progresso
                        </Button>
                        <Button variant="secondary" size="lg" className="font-bold text-lg px-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                            Mais Detalhes
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Rows */}
            <div className="relative z-20 -mt-20 space-y-12 px-4 md:px-16">

                {/* My List */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                        Meus Serviços Ativos
                    </h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {activeServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </section>

                {/* Browse */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                        Disponíveis para Contratar
                    </h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {availableServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
