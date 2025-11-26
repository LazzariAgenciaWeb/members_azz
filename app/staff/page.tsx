import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, CheckCircle2, Clock } from "lucide-react";

export default function StaffDashboard() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
                Olá, Colaborador! 👋
            </h1>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Chamados Pendentes</CardTitle>
                        <MessageSquare className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">
                            2 precisam de resposta urgente
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tarefas da Semana</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                            8 concluídas
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Horas Registradas</CardTitle>
                        <Clock className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32h</div>
                        <p className="text-xs text-muted-foreground">
                            Meta semanal: 40h
                        </p>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-semibold mb-4">Chamados Recentes</h2>
            <div className="space-y-4">
                {/* Mock Ticket List */}
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="hover:bg-muted/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium">Erro no formulário de contato</p>
                                    <p className="text-sm text-muted-foreground">Cliente: Empresa ABC • Há 2 horas</p>
                                </div>
                            </div>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                                Pendente
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
