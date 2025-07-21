import ThemeComponent from "@/components/ThemeComponent";
import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeComponent>
            <Header />
            <Navbar />
            {children}
        </ThemeComponent>
      </body>
    </html>
  );
}
