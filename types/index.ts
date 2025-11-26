export interface Service {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'available' | 'inactive';
    thumbnailUrl: string;
    href: string;
}

export type Role = 'admin' | 'staff' | 'client';

export interface User {
    id: string;
    email: string;
    name?: string;
    avatarUrl?: string;
    role: Role;
}

export interface Invoice {
    id: string;
    description: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
    boletoUrl?: string;
    invoiceUrl?: string;
}
