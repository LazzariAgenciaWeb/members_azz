import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";

interface Step {
    id: string;
    title: string;
    status: 'completed' | 'current' | 'upcoming';
}

interface WorkflowStepsProps {
    steps: Step[];
}

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
    return (
        <div className="relative flex w-full justify-between">
            {/* Connecting Line */}
            <div className="absolute left-0 top-[15px] h-[2px] w-full bg-secondary -z-10" />

            {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
                    <div className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all",
                        step.status === 'completed' && "border-primary bg-primary text-primary-foreground",
                        step.status === 'current' && "border-primary bg-background text-primary ring-4 ring-primary/20",
                        step.status === 'upcoming' && "border-muted-foreground bg-background text-muted-foreground"
                    )}>
                        {step.status === 'completed' ? (
                            <Check className="h-4 w-4" />
                        ) : (
                            <span className="text-xs font-bold">{index + 1}</span>
                        )}
                    </div>
                    <span className={cn(
                        "text-xs font-medium text-center max-w-[80px]",
                        step.status === 'upcoming' && "text-muted-foreground"
                    )}>
                        {step.title}
                    </span>
                </div>
            ))}
        </div>
    );
}
