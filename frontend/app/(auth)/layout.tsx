import Navbar from "@/components/main/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full" lang="en">
        <body className="w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <Navbar/>
                    <main className="w-full h-full justify-center items-center flex">
                        {children}
                    </main>
                </div>
        </body>
    </html>
  );
}
