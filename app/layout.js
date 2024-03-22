import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.Words.",
  description: "Fuck the fucking fuckers of the fucking asylum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
