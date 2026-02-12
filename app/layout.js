export const metadata = {
  title: "Snapforest",
  description: "Premium Ecommerce Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
