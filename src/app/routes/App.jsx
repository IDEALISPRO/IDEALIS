import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutIDEALIS, HomePage, ObjectDetail } from '../../pages/index.js';
import '../styles/app.scss';
// import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "../../shared/SiteTheme/SiteTheme"; 

function App() {
  const routesArr = [
    {
      path: "/",
      element: <HomePage />,
    },
      {
      path: "/about",
      element: <AboutIDEALIS/>,
    },
    {
      path: "/building-details/",
      element: <ObjectDetail />
    },
  ]

  return (    
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    
    </ThemeProvider>
  )
}

export default App
