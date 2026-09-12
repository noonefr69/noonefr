import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";

const firaCode = localFont({
  src: "../../public/Fira_Code/FiraCode-VariableFont_wght.ttf",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Noonefr",
  description: "My portfolio , heb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", firaCode.className)}
      suppressHydrationWarning
    >
      <body className="min-h-full dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-4xl mx-auto flex flex-col justify-center min-h-screen">
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
