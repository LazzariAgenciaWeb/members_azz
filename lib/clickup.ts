const CLICKUP_API_URL = "https://api.clickup.com/api/v2";

interface CreateTaskPayload {
    name: string;
    description: string;
    priority?: number;
}

export class ClickUpService {
    private apiKey: string;
    private listId: string;

    constructor() {
        this.apiKey = process.env.CLICKUP_API_KEY || "";
        this.listId = process.env.CLICKUP_LIST_ID || "";
    }

    async createTask(payload: CreateTaskPayload) {
        if (!this.apiKey || !this.listId) {
            console.warn("ClickUp credentials not found. Mocking task creation.");
            return { id: "mock-task-id", ...payload };
        }

        try {
            const response = await fetch(`${CLICKUP_API_URL}/list/${this.listId}/task`, {
                method: "POST",
                headers: {
                    "Authorization": this.apiKey,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`ClickUp API Error: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Failed to create ClickUp task:", error);
            throw error;
        }
    }
}

export const clickup = new ClickUpService();
