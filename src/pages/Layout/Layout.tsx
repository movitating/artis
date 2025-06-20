import Footer from '@widgets/footer/Footer';
import Header from '@widgets/header/Header';
import Navigation from '@widgets/navigation/Navigation';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
