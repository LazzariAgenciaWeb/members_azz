import { clickup } from "@/lib/clickup";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { subject, description, priority, category } = body;

        // Create task in ClickUp
        const task = await clickup.createTask({
            name: `[${category}] ${subject}`,
            description: description,
            // Map priority: 1 (Urgent) to 4 (Low) - ClickUp uses 1=Urgent, 2=High, 3=Normal, 4=Low
            priority: priority === "Urgente" ? 1 : priority === "Alta" ? 2 : priority === "Média" ? 3 : 4,
        });

        return NextResponse.json({ success: true, taskId: task.id });
    } catch (error) {
        console.error("Error creating ticket:", error);
        return NextResponse.json(
            { success: false, error: "Failed to create ticket" },
            { status: 500 }
        );
    }
}
