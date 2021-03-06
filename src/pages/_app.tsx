import { ThemeProvider } from '../contexts/ThemeContext'
import { CartProvider } from '../contexts/CartContext'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={pageProps.theme} checked={pageProps.checked}>
    <CartProvider items={pageProps.items} subtotal={pageProps.subtotal} shipping={pageProps.shipping} total={pageProps.total}>
      <Component {...pageProps} />
    </CartProvider>
    </ThemeProvider>
  )
}

export default App
