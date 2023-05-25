import "../app/globals.css";
import Layout from "@/app/layout";

export const metadata = {
  title: "Boerepeirdfeesten",
  description: "Boerepeirdfeesten Sellewie Beneden - eerste editie",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
};
