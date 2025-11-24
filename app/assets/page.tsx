import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Folder, Image as ImageIcon, MoreVertical } from "lucide-react";
import Link from "next/link";

const folders = [
    { id: "1", name: "Logotipos", count: 4 },
    { id: "2", name: "Redes Sociais", count: 12 },
    { id: "3", name: "Contratos", count: 2 },
];

const files = [
    {
        id: "1",
        name: "Logo Principal.png",
        type: "image",
        size: "2.4 MB",
        date: "10 Nov, 2025",
    },
    {
        id: "2",
        name: "Logo Branco.png",
        type: "image",
        size: "1.8 MB",
        date: "10 Nov, 2025",
    },
    {
        id: "3",
        name: "Manual da Marca.pdf",
        type: "document",
        size: "5.2 MB",
        date: "12 Nov, 2025",
    },
];

export default function AssetsPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-6xl px-4 pt-24">
                <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Dashboard
                </Link>

                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            Materiais e Arquivos
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Acesse e baixe seus arquivos, logos e documentos importantes.
                        </p>
                    </div>
                    <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Baixar Tudo
                    </Button>
                </div>

                {/* Folders */}
                <h2 className="mb-4 text-lg font-semibold text-foreground">Pastas</h2>
                <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {folders.map((folder) => (
                        <div key={folder.id} className="group flex cursor-pointer items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                                <Folder className="h-6 w-6 fill-current" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground">{folder.name}</h3>
                                <p className="text-xs text-muted-foreground">{folder.count} arquivos</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Files */}
                <h2 className="mb-4 text-lg font-semibold text-foreground">Arquivos Recentes</h2>
                <div className="rounded-xl border border-border bg-card">
                    <div className="grid grid-cols-12 border-b border-border px-6 py-3 text-xs font-medium text-muted-foreground">
                        <div className="col-span-6">Nome</div>
                        <div className="col-span-3">Tamanho</div>
                        <div className="col-span-2">Data</div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="divide-y divide-border">
                        {files.map((file) => (
                            <div key={file.id} className="grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-accent/50">
                                <div className="col-span-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                                        {file.type === 'image' ? (
                                            <ImageIcon className="h-5 w-5 text-purple-500" />
                                        ) : (
                                            <FileText className="h-5 w-5 text-orange-500" />
                                        )}
                                    </div>
                                    <span className="font-medium text-foreground">{file.name}</span>
                                </div>
                                <div className="col-span-3 text-sm text-muted-foreground">{file.size}</div>
                                <div className="col-span-2 text-sm text-muted-foreground">{file.date}</div>
                                <div className="col-span-1 flex justify-end">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
