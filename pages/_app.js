import "../styles/globals.css";
import { ThemeProvider } from "../lib/useTheme";
import { CartProvider } from "../lib/cartContext";
import { FooterNew } from "../components/FooterNew";
// import { HeaderNew } from "../components/HeaderNew";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
          {/* <HeaderNew /> */}
          <Component {...pageProps} />
          <FooterNew />
        </div>
      </ThemeProvider>
    </CartProvider>
  );
}
