import LeftBar from "@/components/sidebar/left";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import RightBar from "@/components/sidebar/right";
import BottomNavigationBar from "@/components/bottom-nav-bar/bottom-nav-bar";
import Topbar from "@/components/top-bar/top-bar";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixels",
  description:
    "A social networking site where people showcase their photography and art skills!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <LeftBar />
          <div className="center-content">
            <Topbar />
            {children}
            <BottomNavigationBar />
          </div>
          <RightBar />
        </main>
      </body>
    </html>
  );
}
