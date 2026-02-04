import "./globals.css";
import { inter } from "./ui/fonts";
export const metadata = {
  title: "Namatullah Shahbazi | Full-Stack Developer",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
