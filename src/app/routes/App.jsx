import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutIDEALIS, HomePage } from '../../pages'
import '../styles/app.scss';
import { Footer } from "../../widgets";

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
  ]

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      {/* <ScrollButton /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
