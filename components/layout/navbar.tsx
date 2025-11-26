import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MonitorPlay, LogOut } from "lucide-react";
import { logout } from "@/app/actions";

export function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <MonitorPlay className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Portal do Cliente
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/dashboard" className="hover:text-foreground transition-colors">
                        Início
                    </Link>
                    <Link href="/support" className="hover:text-foreground transition-colors">
                        Suporte
                    </Link>
                    <Link href="/assets" className="hover:text-foreground transition-colors">
                        Arquivos
                    </Link>
                    <Link href="/dashboard/finance" className="hover:text-foreground transition-colors">
                        Financeiro
                    </Link>
                </div>
                <div className="flex items-center gap-4">
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
