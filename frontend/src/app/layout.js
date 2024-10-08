import { Public_Sans } from "next/font/google";

import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Finance",
  description: "A personal finance application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} flex flex-col items-center antialiased`}
      >
        <div className="w-full max-w-[1440px]">{children}</div>
      </body>
    </html>
  );
}
