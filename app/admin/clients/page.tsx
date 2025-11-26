import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal } from "lucide-react";

const clients = [
    {
        id: "1",
        name: "Empresa ABC Ltda",
        email: "contato@empresaabc.com.br",
        plan: "Premium",
        status: "Ativo",
        projects: 2,
    },
    {
        id: "2",
        name: "Tech Solutions",
        email: "financeiro@techsolutions.com",
        plan: "Standard",
        status: "Ativo",
        projects: 1,
    },
    {
        id: "3",
        name: "Padaria do João",
        email: "joao@padaria.com",
        plan: "Básico",
        status: "Pendente",
        projects: 0,
    },
];

export default function ClientsPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Gerenciar Clientes
                    </h1>
                    <p className="text-muted-foreground">
                        Visualize e gerencie todos os clientes da agência.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Cliente
                </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Buscar clientes..." className="pl-10" />
                </div>
            </div>

            {/* Clients Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Lista de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground">
                            <div className="col-span-4">Nome / Email</div>
                            <div className="col-span-2">Plano</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-2">Projetos</div>
                            <div className="col-span-2 text-right">Ações</div>
                        </div>
                        <div className="divide-y">
                            {clients.map((client) => (
                                <div key={client.id} className="grid grid-cols-12 items-center px-4 py-4 text-sm hover:bg-muted/50 transition-colors">
                                    <div className="col-span-4">
                                        <div className="font-medium text-foreground">{client.name}</div>
                                        <div className="text-xs text-muted-foreground">{client.email}</div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                                            {client.plan}
                                        </span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${client.status === 'Ativo' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                            {client.status}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-muted-foreground">
                                        {client.projects} ativos
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
