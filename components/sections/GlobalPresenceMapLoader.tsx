// components/sections/GlobalPresenceMapLoader.tsx
"use client";

import dynamic from "next/dynamic";

const GlobalPresenceMap = dynamic(
    () => import("@/components/sections/GlobalPresenceMap"),
    {
        ssr: false,
        loading: () => <div className="min-h-[720px] md:min-h-[800px] bg-[#06111e]" />,
    }
);

export default function GlobalPresenceMapLoader() {
    return <GlobalPresenceMap />;
}
