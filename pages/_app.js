import { UserLayout, AdminLayout } from '../components/Layout';
import '../styles/globals.css';

const layouts = {
  L1: UserLayout,
  L2: AdminLayout
};

const MyApp = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return <Layout>
    <Component {...pageProps} />
  </Layout>
};

export default MyApp;