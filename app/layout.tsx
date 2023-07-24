import "./globals.css";

export const metadata = {
  title: "Dev Gallery",
  description: "Michael's web development gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
