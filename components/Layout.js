// * Fonts
import { K2D } from "next/font/google"
const k2d = K2D({
  subsets: ["latin"],
  variable: "--font-k2d",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

import Nav from "./Nav"
import Header from "./Header"
import TopLeftImg from "./TopLeftImg"

const Layout = ({ children }) => {
  return (<div className={`page bg-site text-white bg-cover bg-no-repeat ${k2d.variable} font-k2d relative`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>)
};

export default Layout;
