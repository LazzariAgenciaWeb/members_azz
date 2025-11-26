import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, LogOut, Users, Settings, LayoutDashboard } from "lucide-react";
import { logout } from "@/app/actions";

export function AdminNavbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/admin" className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-red-500" />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Painel Admin
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/admin" className="hover:text-foreground transition-colors flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Visão Geral
                    </Link>
                    <Link href="/admin/clients" className="hover:text-foreground transition-colors flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Clientes
                    </Link>
                    <Link href="/admin/settings" className="hover:text-foreground transition-colors flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Configurações
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-xs text-muted-foreground mr-2">
                        Super Admin
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
