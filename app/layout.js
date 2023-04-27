import './globals.css'
import { Inria_Sans } from 'next/font/google'

const inria = Inria_Sans({weight:['300','400','700'], subsets: ['latin'] })

export const metadata = {
  title: 'JEYLOOJ',
  description: 'FrontEnd developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inria.className}>{children}</body>
    </html>
  )
}
