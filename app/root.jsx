import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Scripts } from "react-router";
import Navbar from "./components/Navbar.jsx";
import { FavoritesProvider } from './store/FavoritesContext.jsx';

export default function App() {
  return (
    <html lang="en" data-bs-theme='dark'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <FavoritesProvider>
          <Navbar />
          <main className="container mt-4">
            <Outlet />
          </main>
        </FavoritesProvider>
        <Scripts />
      </body>
    </html>
  );
}
