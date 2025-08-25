import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/app.scss';
import { Header } from "../../widgets";
import { AboutIDEALIS, Services, HomePage, News, Favorites, ContactsPage,ApplicationForm } from '../../pages'
import '../styles/app.scss';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../shared/SiteTheme/SiteTheme";
import { Messenger } from '../../features';

import { Footer } from "../../widgets";

function App() {
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
      path: "/application",
      element: <ApplicationForm/>,
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          {routesArr?.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
        {/* <Footer /> */}
        <Messenger/>
        <Footer/> 
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
