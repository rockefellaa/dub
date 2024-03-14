import { inter, satoshi } from "@/styles/fonts";
import { TooltipProvider } from "@dub/ui/src/tooltip";
import { cn, constructMetadata } from "@dub/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Toaster } from "sonner";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(satoshi.variable, inter.variable)}>
      <body>
        <Script src="https://cdn.tailwindcss.com"></Script>
        <TooltipProvider>
          <Toaster closeButton />
          {children}
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </body>
    </html>
  );
}
