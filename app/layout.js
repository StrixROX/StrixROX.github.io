import './globals.css'

export const metadata = {
  title: 'Pratyush Kumar',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
