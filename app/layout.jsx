import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NextJS | Tailwindcss | Typicode",
  description: "NextJS | Tailwindcss | Typicode",
  keywords: "NextJS, Tailwindcss, Typicode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
