import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from '../../pages'
import '../styles/app.scss';
import './App.css'

function App() {
  const routesArr = [
    {
      path: "/",
      element: <HomePage />,
    },
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  )
}

export default App
