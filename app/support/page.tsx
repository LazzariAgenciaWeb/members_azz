import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Plus, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const tickets = [
    {
        id: "T-1024",
        subject: "Site fora do ar",
        status: "open",
        priority: "high",
        date: "Hoje, 10:30",
        category: "Suporte Técnico",
    },
    {
        id: "T-1023",
        subject: "Alteração de senha de e-mail",
        status: "in_progress",
        priority: "medium",
        date: "Ontem, 15:45",
        category: "Acesso",
    },
    {
        id: "T-1020",
        subject: "Solicitação de nova arte para Instagram",
        status: "closed",
        priority: "low",
        date: "20 Nov, 2025",
        category: "Design",
    },
];

const statusMap: Record<string, { label: string; color: string }> = {
    open: { label: "Aberto", color: "bg-red-500/10 text-red-500" },
    in_progress: { label: "Em Andamento", color: "bg-blue-500/10 text-blue-500" },
    closed: { label: "Resolvido", color: "bg-green-500/10 text-green-500" },
};

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-5xl px-4 pt-24">
                <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Dashboard
                </Link>

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            Central de Ajuda
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Acompanhe seus chamados ou abra uma nova solicitação.
                        </p>
                    </div>
                    <Link href="/support/new">
                        <Button className="w-full sm:w-auto">
                            <Plus className="mr-2 h-4 w-4" />
                            Novo Chamado
                        </Button>
                    </Link>
                </div>

                {/* Search */}
                <div className="mb-8 relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Buscar chamados..." className="pl-10" />
                </div>

                {/* Ticket List */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <div className="grid grid-cols-12 border-b border-border bg-muted/30 px-6 py-3 text-xs font-medium text-muted-foreground">
                        <div className="col-span-6 sm:col-span-5">Assunto</div>
                        <div className="col-span-3 sm:col-span-2">Status</div>
                        <div className="hidden sm:col-span-2 sm:block">Categoria</div>
                        <div className="col-span-3 sm:col-span-2 text-right sm:text-left">Data</div>
                        <div className="hidden sm:col-span-1 sm:block"></div>
                    </div>
                    <div className="divide-y divide-border">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-accent/50">
                                <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <span className="block font-medium text-foreground truncate pr-4">{ticket.subject}</span>
                                        <span className="block text-xs text-muted-foreground sm:hidden">{ticket.id}</span>
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusMap[ticket.status].color}`}>
                                        {statusMap[ticket.status].label}
                                    </span>
                                </div>
                                <div className="hidden sm:col-span-2 sm:block text-sm text-muted-foreground">
                                    {ticket.category}
                                </div>
                                <div className="col-span-3 sm:col-span-2 text-sm text-muted-foreground text-right sm:text-left">
                                    {ticket.date}
                                </div>
                                <div className="hidden sm:col-span-1 sm:flex justify-end">
                                    <Button variant="ghost" size="sm">Ver</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
