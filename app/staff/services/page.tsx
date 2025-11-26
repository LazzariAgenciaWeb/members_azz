import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";

const services = [
    {
        id: "website",
        title: "Criação de Site",
        description: "Desenvolvimento do seu novo site institucional.",
        price: "R$ 2.500,00",
        status: "Ativo",
    },
    {
        id: "social-media",
        title: "Gestão de Redes Sociais",
        description: "Planejamento e postagens para Instagram e LinkedIn.",
        price: "R$ 1.200,00/mês",
        status: "Ativo",
    },
    {
        id: "marketing",
        title: "Marketing Digital",
        description: "Campanhas de tráfego pago para aumentar suas vendas.",
        price: "R$ 1.500,00/mês",
        status: "Disponível",
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Catálogo de Serviços
                    </h1>
                    <p className="text-muted-foreground">
                        Gerencie os serviços que aparecem para os clientes.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Serviço
                </Button>
            </div>

            {/* Search */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Buscar serviços..." className="pl-10" />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.id}>
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${service.status === 'Ativo' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                {service.status}
                            </span>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                                {service.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-bold">{service.price}</span>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
