import "./globals.css";

export const metadata = {
  title: "Snapforest",
  description: "Premium Ecommerce Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
