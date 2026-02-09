"use client";

import GSAPCleanup from "@/components/GSAPCleanup";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GSAPCleanup />
            {children}
        </>
    );
}
