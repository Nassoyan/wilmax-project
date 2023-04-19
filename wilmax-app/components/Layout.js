import Footer from './homepageComponents/Footer'
import Header from './homepageComponents/Header'
import { useRouter } from 'next/router';


export default function Layout({ children}) {
    const router = useRouter()

    // if (router.pathname === '/register') {
    //     return <>{children}</>;
    //   } else if(router.pathname === '/verifyYourEmail') {
    //     return <>{children}</>;
    //   } else if(router.pathname === '/changepassword') {
    //     return <>{children}</>;
    //   }
    

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}