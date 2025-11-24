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
                        Enviar Link de Acesso
                    </Button>
                </form>

                <p className="text-center text-xs text-muted-foreground">
                    Ao clicar em continuar, você concorda com nossos termos de serviço e política de privacidade.
                </p>
            </div>
        </div>
    );
}
