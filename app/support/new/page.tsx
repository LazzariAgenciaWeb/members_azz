'use client';

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function NewTicketPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert("Chamado criado com sucesso! (Simulação)");
        setIsSubmitting(false);
        // In real app: router.push('/support')
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-2xl px-4 pt-24">
                <Link href="/support" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Chamados
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Novo Chamado
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Descreva sua solicitação abaixo e nossa equipe responderá em breve.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Assunto</label>
                        <Input placeholder="Ex: Site fora do ar" required />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Categoria</label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Suporte Técnico</option>
                                <option>Financeiro</option>
                                <option>Design / Criação</option>
                                <option>Outros</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Prioridade</label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Baixa</option>
                                <option>Média</option>
                                <option>Alta</option>
                                <option>Urgente</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Descrição Detalhada</label>
                        <textarea
                            className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Descreva o problema ou solicitação com o máximo de detalhes possível..."
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Abrir Chamado
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
