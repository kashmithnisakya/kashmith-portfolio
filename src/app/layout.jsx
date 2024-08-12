import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"] , 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono", 
});

export const metadata = {
  title: "Kashmith Samaranayaka",
  description: "A ML Engineer and Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
      <Header />
      {children}
      </body>
    </html>
  );
}
