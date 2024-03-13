import { Inter } from "next/font/google";



export const metadata = {
  title: "Productivity",
  description: "Mini Project 1-B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
