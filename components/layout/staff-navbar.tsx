import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, LogOut, Briefcase, MessageSquare, LayoutDashboard, DollarSign } from "lucide-react";
import { logout } from "@/app/actions";
import { cookies } from "next/headers";

export async function StaffNavbar() {
    const cookieStore = await cookies();
    const session = cookieStore.get('session');
    let department = 'production'; // Default to production if not set

    if (session) {
        try {
            const data = JSON.parse(session.value);
            department = data.department || 'production';
        } catch { }
    }

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/staff" className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-500" />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Área do Colaborador
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/staff" className="hover:text-foreground transition-colors flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Visão Geral
                    </Link>

                    {/* Production Sector Links */}
                    {department === 'production' && (
                        <>
                            <Link href="/staff/services" className="hover:text-foreground transition-colors flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                Serviços
                            </Link>
                            <Link href="/staff/tickets" className="hover:text-foreground transition-colors flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" />
                                Chamados
                            </Link>
                        </>
                    )}

                    {/* Administrative Sector Links */}
                    {department === 'administrative' && (
                        <>
                            <Link href="/admin/finance" className="hover:text-foreground transition-colors flex items-center gap-2">
                                <DollarSign className="h-4 w-4" />
                                Financeiro
                            </Link>
                            <Link href="/staff/crm" className="hover:text-foreground transition-colors flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                CRM / Leads
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-xs text-muted-foreground mr-2 capitalize">
                        Setor: {department === 'administrative' ? 'Administrativo' : 'Produção'}
                    </div>
                    <form action={logout}>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sair
                        </Button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
