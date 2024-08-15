import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReadQuest",
  description: "Created with ❤️ by Oriana Mendez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <footer className="text-center p-4 text-lg bg-yellow-100">
          <p>
            This project was created by{" "}
            <a href="https://oriianamendez.dev/" className="text-purple-700">
              Oriana Mendez
            </a>
            , and it is{" "}
            <a
              href="https://github.com/Oriianamendez/read-quest"
              className="text-purple-700"
            >
              open-sourced
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
