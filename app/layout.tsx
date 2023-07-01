import "./globals.css";

export const metadata = {
  title: "The Bloggy Blog",
  description: "The Bloggy Blog is cool",
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
