import { Navbar } from "@/components/layout/navbar";
import { WorkflowSteps } from "@/components/services/workflow-steps";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckSquare, FileImage, Share2 } from "lucide-react";
import Link from "next/link";

const currentWorkflow = [
    { id: "1", title: "Planejamento", status: "completed" as const },
    { id: "2", title: "Criação", status: "completed" as const },
    { id: "3", title: "Revisão", status: "current" as const },
    { id: "4", title: "Agendamento", status: "upcoming" as const },
    { id: "5", title: "Postado", status: "upcoming" as const },
];

const posts = [
    {
        id: "1",
        title: "Carrossel: 5 Dicas de SEO",
        date: "25 Nov, 2025",
        status: "Aguardando Aprovação",
        image: "/placeholder",
    },
    {
        id: "2",
        title: "Reels: Bastidores da Agência",
        date: "27 Nov, 2025",
        status: "Em Criação",
        image: "/placeholder",
    },
];

export default function SocialMediaPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-5xl px-4 pt-24">
                <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Dashboard
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Gestão de Redes Sociais
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Acompanhe o calendário e aprove os conteúdos da semana.
                    </p>
                </div>

                {/* Active Workflow */}
                <div className="mb-12 rounded-xl border border-border bg-card p-8">
                    <h2 className="mb-8 text-lg font-semibold text-foreground">Fluxo da Semana (24/11 - 30/11)</h2>
                    <WorkflowSteps steps={currentWorkflow} />

                    <div className="mt-8 flex justify-end">
                        <Button className="gap-2">
                            <CheckSquare className="h-4 w-4" />
                            Aprovar Conteúdos Pendentes
                        </Button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {posts.map((post) => (
                        <div key={post.id} className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50">
                            <div className="h-24 w-24 flex-none rounded-lg bg-secondary flex items-center justify-center">
                                <FileImage className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <div className="flex flex-col justify-between py-1">
                                <div>
                                    <h3 className="font-semibold text-foreground">{post.title}</h3>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-500/20">
                                        {post.status}
                                    </span>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
