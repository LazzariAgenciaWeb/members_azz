import { StaffNavbar } from "@/components/layout/staff-navbar";

export default function StaffLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <StaffNavbar />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}
