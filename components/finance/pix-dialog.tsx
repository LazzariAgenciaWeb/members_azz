'use client';

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { generatePixPayload } from '@/lib/pix';
import { Copy, Check } from 'lucide-react';

interface PixDialogProps {
    amount: number;
    description: string;
    pixKey: string;
}

export function PixDialog({ amount, description, pixKey }: PixDialogProps) {
    const [payload, setPayload] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const code = generatePixPayload(pixKey, amount, 'AZZ AGENCIA', 'SAO PAULO', '***', description);
        setPayload(code);
    }, [amount, description, pixKey]);

    const handleCopy = () => {
        navigator.clipboard.writeText(payload);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white">
                    <span className="font-bold">Pagar com PIX</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Pagamento via PIX</DialogTitle>
                    <DialogDescription>
                        Escaneie o QR Code ou copie o código abaixo para pagar.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center space-y-6 py-4">
                    <div className="bg-white p-4 rounded-lg">
                        {payload && <QRCodeSVG value={payload} size={200} />}
                    </div>

                    <div className="text-center space-y-1">
                        <p className="text-sm text-muted-foreground">Valor a pagar</p>
                        <p className="text-2xl font-bold">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
                        </p>
                    </div>

                    <div className="flex w-full items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                className="w-full gap-2"
                                onClick={handleCopy}
                            >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                {copied ? 'Copiado!' : 'Copiar Código PIX'}
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
