import { AppProps } from "next/app";
import Layout from "@/app/layout";

export const metadata = {
  title: "Boerepeirdfeesten",
  description: "Boerepeirdfeesten Sellewie Beneden - eerste editie",
};

interface CustomPageProps { // <--- your custom page props
   // your props
}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
};
