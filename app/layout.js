import { Inter } from "next/font/google"; // Import the font loader
import Header from "@/Components/Header";
import "./globals.css";
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";

    // Prevent Font Awesome from adding its own CSS since we imported it manually
    config.autoAddCss = false;

// Define the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tallento.ai",
  description: "for betterment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
