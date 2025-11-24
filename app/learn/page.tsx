import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const videos = [
    {
        id: "1",
        title: "Como aprovar seus posts",
        duration: "2:30",
        thumbnail: "bg-blue-500",
    },
    {
        id: "2",
        title: "Entendendo o Funil de Vendas",
        duration: "5:45",
        thumbnail: "bg-purple-500",
    },
    {
        id: "3",
        title: "Dicas para fotos melhores",
        duration: "3:15",
        thumbnail: "bg-pink-500",
    },
];

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto max-w-6xl px-4 pt-24">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Área de Aprendizado
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Tutoriais e dicas para você aproveitar ao máximo nossos serviços.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {videos.map((video) => (
                        <div key={video.id} className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:scale-105 hover:shadow-xl">
                            <div className={`aspect-video w-full ${video.thumbnail} opacity-80 transition-opacity group-hover:opacity-100`}>
                                <div className="flex h-full items-center justify-center">
                                    <PlayCircle className="h-12 w-12 text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-foreground line-clamp-1">{video.title}</h3>
                                <p className="mt-1 text-xs text-muted-foreground">{video.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
