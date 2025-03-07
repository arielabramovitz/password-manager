
import "./globals.css";
import Navbar from "@/components/main/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full" lang="en">
        <body className="dark w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <Navbar />
                    <main className="w-full h-full">
                        {children}
                    </main>
                </div>
        </body>
    </html>
  );
}
