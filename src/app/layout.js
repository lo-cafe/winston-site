import "./globals.scss";

import Navbar from "~/components/Navbar";

export const metadata = {
  title: "Winston",
  description: "Redirect page to the app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
