import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import PageHome from "./routes/home";
import PageContohLoader, {
  loader as contohLoader,
} from "./routes/contoh-loader";
import PageShoes, { loader as shoesLoader } from "./routes/shoes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "contoh-loader",
        element: <PageContohLoader />,
        loader: contohLoader,
      },
      {
        path: "shoes",
        element: <PageShoes />,
        loader: shoesLoader,
      },
    ],
  },
]);

export default router;
