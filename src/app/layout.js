import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '~/components/Navbar';
import StyledComponentsRegistry from '~/lib/registry'

export const metadata = {
  title: 'Winston',
  description: 'Redirect page to the app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><StyledComponentsRegistry><Navbar />{children}</StyledComponentsRegistry></body>
    </html>
  )
}
