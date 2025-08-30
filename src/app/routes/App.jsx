import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/app.scss";
import { Header, HeaderAdmin } from "../../widgets";
import {
  AboutIDEALIS,
  Services,
  HomePage,
  News,
  Favorites,
  ContactsPage,
  CreateObject,
  Login,
  Published,
  NoAds,
  AdvertisingRequests,
  PendingConfirmation,
  Deleted,
  MyObjects,
  Sales,
  SavedSearches,
  OthersLooking,
  Impressions,
  Lawyers,
  ListAgents,
  Rules,
  VideoTutorials,
  EstateCategories,
  ObjectDetail,
} from "../../pages";
import "../styles/app.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../shared/SiteTheme/SiteTheme";
import { Messenger } from "../../features";
import { Footer } from "../../widgets";
import Cookies from "js-cookie";
import { CreateObjectPublic } from "../../entities";

function App() {
  const token = Cookies.get("token");
  const role = Cookies.get("role");

  const isAuth = !!token;

  const routesArr = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutIDEALIS />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/contacts",
      element: <ContactsPage />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/estate-categories",
      element: <EstateCategories />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/objectDetail/:id",
      element: <ObjectDetail />,
    },
    {
      path: "/create-object-public",
      element: <CreateObjectPublic />,
    },
  ];

  const adminRoutes = [
    {
      path: "/admin/published",
      element: <Published />,
    },
    {
      path: "/admin/no-ads",
      element: <NoAds />,
    },
    {
      path: "/admin/advertising-requests",
      element: <AdvertisingRequests />,
    },
    {
      path: "/admin/pending-confirmation",
      element: <PendingConfirmation />,
    },
    {
      path: "/admin/deleted",
      element: <Deleted />,
    },
    {
      path: "/admin/my-objects",
      element: <MyObjects />,
    },
    {
      path: "/admin/sales",
      element: <Sales />,
    },
    {
      path: "/admin/saved-searches",
      element: <SavedSearches />,
    },
    {
      path: "/admin/others-looking",
      element: <OthersLooking />,
    },
    {
      path: "/admin/impressions",
      element: <Impressions />,
    },
    {
      path: "/admin/lawyers",
      element: <Lawyers />,
    },
    {
      path: "/admin/list-agents",
      element: <ListAgents />,
    },
    {
      path: "/admin/rules",
      element: <Rules />,
    },
    {
      path: "/admin/video-tutorials",
      element: <VideoTutorials />,
    },
    {
      path: "/admin/add-object",
      element: <CreateObject />,
    },
    {
      path: "/admin/objectDetail/:id",
      element: <ObjectDetail />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <HeaderAdmin />
        <Routes>
          {routesArr.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}

          {isAuth &&
            adminRoutes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}

          {!isAuth && <Route path="/admin" element={<Login />} />}
        </Routes>
        <Messenger />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
