import "../styles/globals.css";
import { ThemeProvider } from "../lib/useTheme";
import { CartProvider } from "../lib/cartContext";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </CartProvider>
  );
}
