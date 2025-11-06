import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClickSpark from "./components/Clickspark";

export const metadata = {
  title: "Two-Day Research Summit SRMIST-IEEE 2025",
  description: "Frontiers in Technology for Sustainable & Inclusive Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClickSpark
        sparkColor='#000000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <main className="pt-20 min-h-[70vh]">{children}</main>
        <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
