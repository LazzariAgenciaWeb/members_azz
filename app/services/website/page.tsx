import { Navbar } from "@/components/layout/navbar";
import { Progress } from "@/components/ui/progress";
import { Timeline } from "@/components/services/timeline";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

const milestones = [
    {
        id: "1",
        title: "Briefing & Planejamento",
        description: "Definição de escopo, público-alvo e objetivos.",
        status: "completed" as const,
        date: "10 Nov",
    },
    {
        id: "2",
        title: "Design & Prototipagem",
        description: "Criação do layout e aprovação visual.",
        status: "current" as const,
        date: "Em andamento",
    },
    {
        id: "3",
        title: "Desenvolvimento",
        description: "Codificação do site e integração de sistemas.",
        status: "upcoming" as const,
    },
    {
        id: "4",
        title: "Conteúdo & SEO",
        description: "Inserção de textos e otimização para buscadores.",
        status: "upcoming" as const,
    },
    {
        id: "5",
        title: "Lançamento",
        description: "Publicação oficial e testes finais.",
        status: "upcoming" as const,
    },
];

export default function WebsiteServicePage() {
    const progress = 35; // 35% complete

    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-5xl px-4 pt-24">
                <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Dashboard
                </Link>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                                Criação de Site Institucional
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                Projeto iniciado em 01 de Novembro de 2025
                            </p>
                        </div>

                        {/* Progress Section */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="font-semibold text-foreground">Progresso Geral</h2>
                                <span className="text-sm font-bold text-primary">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-3" />
                            <p className="mt-4 text-sm text-muted-foreground">
                                Estamos na fase de <strong>Design & Prototipagem</strong>. A previsão de conclusão desta etapa é 28 de Novembro.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <h2 className="mb-6 font-semibold text-foreground">Linha do Tempo</h2>
                            <Timeline items={milestones} />
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="space-y-6">
                        <div className="rounded-xl border border-border bg-card p-6">
                            <h3 className="mb-4 font-semibold text-foreground">Ações Rápidas</h3>
                            <div className="space-y-3">
                                <Button className="w-full justify-start" variant="outline">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Falar com o Gerente
                                </Button>
                                <Button className="w-full justify-start" variant="secondary">
                                    Ver Arquivos do Projeto
                                </Button>
                            </div>
                        </div>

                        <div className="rounded-xl bg-primary/10 p-6">
                            <h3 className="mb-2 font-semibold text-primary">Precisa de ajuda?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Se tiver dúvidas sobre o andamento, entre em contato direto com nossa equipe.
                            </p>
                            <Button className="w-full">Suporte Prioritário</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
