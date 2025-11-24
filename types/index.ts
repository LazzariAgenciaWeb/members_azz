export interface Service {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'available' | 'inactive';
    thumbnailUrl: string;
    href: string;
}

export interface User {
    id: string;
    email: string;
    name?: string;
    avatarUrl?: string;
}
