"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GSAPCleanup() {
    const pathname = usePathname();

    useEffect(() => {
        // Cleanup ScrollTrigger on route change
        const cleanup = async () => {
            const ScrollTriggerModule = await import("gsap/ScrollTrigger").catch(() => null);
            if (ScrollTriggerModule) {
                const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
                ScrollTrigger.getAll().forEach(st => st.kill());
                ScrollTrigger.refresh();
            }
        };

        // Cleanup when pathname changes (navigating to new page)
        return () => {
            cleanup();
        };
    }, [pathname]);

    return null;
}
