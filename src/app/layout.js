import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
