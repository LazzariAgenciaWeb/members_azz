import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Invoice } from "@/types";
import { FileText, Download, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

const invoices: Invoice[] = [
    {
        id: "INV-001",
        description: "Desenvolvimento de Site - Parcela 1/2",
        amount: 1250.00,
        dueDate: "2023-10-15",
        status: "paid",
        boletoUrl: "#",
        invoiceUrl: "#",
    },
    {
        id: "INV-002",
        description: "Gestão de Redes Sociais - Outubro",
        amount: 1200.00,
        dueDate: "2023-11-10",
        status: "paid",
        boletoUrl: "#",
        invoiceUrl: "#",
    },
    {
        id: "INV-003",
        description: "Desenvolvimento de Site - Parcela 2/2",
        amount: 1250.00,
        dueDate: "2023-11-15",
        status: "pending",
        boletoUrl: "#",
        invoiceUrl: "#",
    },
];

export default function FinancePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-5xl px-4 pt-24">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Financeiro
                    </h1>
                    <p className="text-muted-foreground">
                        Acesse suas faturas, boletos e notas fiscais.
                    </p>
                </div>

                <div className="grid gap-6">
                    {/* Summary Cards */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Próximo Vencimento
                                </CardTitle>
                                <Clock className="h-4 w-4 text-yellow-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">15/11</div>
                                <p className="text-xs text-muted-foreground">
                                    R$ 1.250,00
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Pago
                                </CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">R$ 2.450,00</div>
                                <p className="text-xs text-muted-foreground">
                                    Últimos 30 dias
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Pendências
                                </CardTitle>
                                <AlertCircle className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1 Fatura</div>
                                <p className="text-xs text-muted-foreground">
                                    Em aberto
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Invoices List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Histórico de Faturas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {invoices.map((invoice) => (
                                    <div
                                        key={invoice.id}
                                        className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg border p-4 gap-4 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`mt-1 rounded-full p-2 ${invoice.status === 'paid' ? 'bg-green-500/10 text-green-500' :
                                                    invoice.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                                        'bg-red-500/10 text-red-500'
                                                }`}>
                                                <FileText className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{invoice.description}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Vence em: {new Date(invoice.dueDate).toLocaleDateString('pt-BR')}
                                                </div>
                                                <div className="mt-1 md:hidden">
                                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${invoice.status === 'paid' ? 'bg-green-500/10 text-green-500' :
                                                            invoice.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                                                'bg-red-500/10 text-red-500'
                                                        }`}>
                                                        {invoice.status === 'paid' ? 'Pago' : invoice.status === 'pending' ? 'Pendente' : 'Atrasado'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4">
                                            <div className="text-right hidden md:block">
                                                <div className="font-bold">
                                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(invoice.amount)}
                                                </div>
                                                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${invoice.status === 'paid' ? 'bg-green-500/10 text-green-500' :
                                                        invoice.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                                            'bg-red-500/10 text-red-500'
                                                    }`}>
                                                    {invoice.status === 'paid' ? 'Pago' : invoice.status === 'pending' ? 'Pendente' : 'Atrasado'}
                                                </span>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" className="gap-2" disabled={!invoice.boletoUrl}>
                                                    <Download className="h-4 w-4" />
                                                    <span className="hidden sm:inline">Boleto</span>
                                                </Button>
                                                <Button variant="outline" size="sm" className="gap-2" disabled={!invoice.invoiceUrl}>
                                                    <FileText className="h-4 w-4" />
                                                    <span className="hidden sm:inline">Nota Fiscal</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
