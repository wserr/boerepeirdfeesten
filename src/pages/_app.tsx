import { AppProps } from "next/app";
import Layout from "@/app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boerepeirdfeesten",
  description: "Boerepeirdfeesten Sellewie Beneden - tweede editie",
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
