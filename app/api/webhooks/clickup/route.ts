import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { event, task_id } = body;

        console.log(`Received ClickUp Webhook: ${event} for task ${task_id}`);

        // Here we would update the local database status
        // await db.tickets.update({ where: { clickupId: task_id }, data: { status: ... } })

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json(
            { error: "Webhook processing failed" },
            { status: 500 }
        );
    }
}
