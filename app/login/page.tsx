import { login } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MonitorPlay } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MonitorPlay className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Acesse sua Área
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Digite seu e-mail para receber o link de acesso mágico.
                    </p>
                </div>

                <form action={login} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            className="bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
                        />
                    </div>
                    <Button type="submit" className="w-full font-semibold" size="lg">
                        Entrar com Email
                    </Button>

                </form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Acesso Rápido (Teste)
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <form action={login} className="contents">
                        <input type="hidden" name="email" value="admin@azz.com" />
                        <Button
                            type="submit"
                            variant="outline"
                            className="w-full text-xs border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                        >
                            Admin
                        </Button>
                    </form>

                    <form action={login} className="contents">
                        <input type="hidden" name="email" value="cliente@azz.com" />
                        <Button
                            type="submit"
                            variant="outline"
                            className="w-full text-xs border-green-500/20 hover:bg-green-500/10 hover:text-green-500"
                        >
                            Cliente
                        </Button>
                    </form>

                    <form action={login} className="contents">
                        <input type="hidden" name="email" value="staff-adm@azz.com" />
                        <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/10 text-blue-400">
                            Staff (Adm)
                        </Button>
                    </form>

                    <form action={login} className="contents">
                        <input type="hidden" name="email" value="staff-prod@azz.com" />
                        <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/10 text-purple-400">
                            Staff (Prod)
                        </Button>
                    </form>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                    Ao clicar em continuar, você concorda com nossos termos de serviço e política de privacidade.
                </p>

                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-500">
                    <p className="font-semibold mb-1">🧪 Modo de Teste:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs opacity-90">
                        <li>Para <strong>Admin</strong>: use um email com "admin" (ex: admin@azz.com)</li>
                        <li>Para <strong>Colaborador</strong>: use um email com "staff" (ex: staff@azz.com)</li>
                        <li>Para <strong>Cliente</strong>: qualquer outro email</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
