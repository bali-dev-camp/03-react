import { Outlet, Link, useNavigation } from "react-router-dom";

function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contoh-loader">Contoh loader</Link>
      <Link to="/shoes">Shoes</Link>

      {navigation.state === "loading" ? <p>Anggap aja spinner</p> : null}

      <Outlet />

      {/* Contoh loading */}
      {/* <div style={{ opacity: navigation.state === "loading" ? 0.3 : 1 }}>
        <Outlet />
      </div> */}
    </div>
  );
}

export default Layout;
