import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineItem {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'upcoming';
    date?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="space-y-8">
            {items.map((item, index) => (
                <div key={item.id} className="relative flex gap-4">
                    {/* Line */}
                    {index !== items.length - 1 && (
                        <div className="absolute left-[11px] top-8 h-full w-[2px] bg-border" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex h-6 w-6 flex-none items-center justify-center bg-background">
                        {item.status === 'completed' && (
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                        )}
                        {item.status === 'current' && (
                            <div className="relative flex h-6 w-6 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <Circle className="relative h-6 w-6 fill-primary text-primary" />
                            </div>
                        )}
                        {item.status === 'upcoming' && (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1 pb-8">
                        <h3 className={cn(
                            "font-semibold leading-none",
                            item.status === 'completed' && "text-foreground",
                            item.status === 'current' && "text-primary",
                            item.status === 'upcoming' && "text-muted-foreground"
                        )}>
                            {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {item.description}
                        </p>
                        {item.date && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground/70">
                                <Clock className="h-3 w-3" />
                                <span>{item.date}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
