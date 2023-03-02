import '@/styles/globals.css'
import Navbar from './posts/navbar'

export default function App({ Component, pageProps }) {
  return( 
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  
  )
}
