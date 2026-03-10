// components/sections/GlobalPresenceMapLoader.tsx
"use client";

import dynamic from "next/dynamic";

const GlobalPresenceMap = dynamic(
    () => import("@/components/sections/GlobalPresenceMap"),
    {
        ssr: false,
        loading: () => <div className="h-96 bg-[#06111e]" />,
    }
);

export default function GlobalPresenceMapLoader() {
    return <GlobalPresenceMap />;
}
