import { Figtree } from 'next/font/google'

import getSongsByUserId from '@/actions/getSongsByUserId'
import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'

import './globals.css'

import { MyUserContextProvider }from '../hooks/useUser';

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <MyUserContextProvider>
          <ToasterProvider />
          <SupabaseProvider>
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </SupabaseProvider>
        </MyUserContextProvider>
      </body>
    </html>
  )
}