import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(){
            try{
              var key = 'tt-theme';
              var stored = localStorage.getItem(key);
              var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              if(stored === 'dark' || (!stored && prefersDark)){
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }catch(e){}
          })();
        `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
