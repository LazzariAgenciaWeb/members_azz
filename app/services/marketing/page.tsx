import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Hammer, Link as LinkIcon, Megaphone } from "lucide-react";
import Link from "next/link";

const stages = [
    {
        id: "build",
        title: "Construir",
        description: "Estruturação de canais e planejamento.",
        icon: Hammer,
        status: "completed",
        metrics: ["Landing Page Otimizada", "Pixel Configurado"],
    },
    {
        id: "connect",
        title: "Conectar",
        description: "Criação e veiculação de anúncios.",
        icon: LinkIcon,
        status: "active",
        metrics: ["Campanha Google Ads", "Campanha Meta Ads"],
    },
    {
        id: "convert",
        title: "Converter",
        description: "Análise de resultados e otimização.",
        icon: BarChart3,
        status: "upcoming",
        metrics: ["Análise de ROI", "Otimização de CPA"],
    },
];

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-5xl px-4 pt-24">
                <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Dashboard
                </Link>

                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            Marketing Digital
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Acompanhe o funil de vendas e performance das campanhas.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Megaphone className="h-4 w-4" />
                        Ver Relatório Completo
                    </Button>
                </div>

                {/* Funnel Stages */}
                <div className="grid gap-6 md:grid-cols-3">
                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`relative overflow-hidden rounded-xl border p-6 transition-all ${stage.status === 'active'
                                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                    : 'border-border bg-card'
                                }`}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-background border border-border">
                                <stage.icon className={`h-6 w-6 ${stage.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`} />
                            </div>

                            <h3 className={`font-bold ${stage.status === 'active' ? 'text-primary' : 'text-foreground'}`}>
                                {stage.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {stage.description}
                            </p>

                            <div className="mt-6 space-y-2">
                                {stage.metrics.map((metric, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <div className={`h-1.5 w-1.5 rounded-full ${stage.status === 'completed' ? 'bg-green-500' : 'bg-primary'}`} />
                                        {metric}
                                    </div>
                                ))}
                            </div>

                            {stage.status === 'active' && (
                                <div className="absolute right-0 top-0 -mr-3 -mt-3 h-16 w-16 rotate-12 bg-primary/10 blur-2xl" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    <div className="rounded-xl border border-border bg-card p-6">
                        <p className="text-sm font-medium text-muted-foreground">Investimento</p>
                        <p className="mt-2 text-2xl font-bold text-foreground">R$ 1.250,00</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6">
                        <p className="text-sm font-medium text-muted-foreground">Cliques</p>
                        <p className="mt-2 text-2xl font-bold text-foreground">843</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6">
                        <p className="text-sm font-medium text-muted-foreground">Leads</p>
                        <p className="mt-2 text-2xl font-bold text-foreground">42</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6">
                        <p className="text-sm font-medium text-muted-foreground">Custo/Lead</p>
                        <p className="mt-2 text-2xl font-bold text-foreground">R$ 29,76</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
