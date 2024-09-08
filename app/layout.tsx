import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Spot Alert - Location-Based Reminders Made Simple',
  description: 'Get notified about important places as you move. Spot Alert is your smart location companion for effortless location-based reminders.',
  keywords: ['Spot Alert', 'location reminders', 'geolocation', 'location-based notifications', 'reminder app', 'smart reminders'],
  applicationName: 'Spot Alert',
  openGraph: {
    title: 'Spot Alert - Location-Based Reminders',
    description: 'Receive timely notifications about important places as you move. Spot Alert makes location-based reminders simple and smart.',
    url: 'https://spotalert.nexify.dev',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@spotalert',
    title: 'Spot Alert - Smart Location Companion',
    description: 'Simplify your life with location-based reminders from Spot Alert. Stay notified about key places as you move.',
    
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
