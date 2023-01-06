import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export function Layout({ children } : any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}