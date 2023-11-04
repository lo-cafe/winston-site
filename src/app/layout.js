import "./globals.scss";

import Navbar from "~/components/Navbar";

export const metadata = {
  title: "Winston for Reddit",
  description:
    "An iOS native not-client developer tool app for devs to test their API keys.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="description" content="" />
      <meta name="keywords" content="winston, reddit, apollo, client, api" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="lo.cafe" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content="https://winston.cafe" />
      <meta property="og:image" content="https://winston.cafe/cover.png" />
      <meta name="og:site_name" content={metadata.title} />
      <meta name="twitter:site" content="@locafe_24h" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="https://winston.cafe/cover.png" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
