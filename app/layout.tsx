import "./globals.css";

export const metadata = {
  title: "Namatullah Shahbazi | Full-Stack Developer",
  description: "Senior Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
