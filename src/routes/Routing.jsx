import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/homepage/index";
import ListingPage from "../pages/listingpage/index";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/error/index";
import GamePage from "../pages/gamepage/index";
import SearchPage from "../pages/searchpage/index";
import RegisterPage from "../pages/register/index";
import LoginPage from "../pages/login/index";
import AccountPage from "../pages/account/index";
import ProfilePage from "../pages/profile/index";

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:slug/:id" element={<GamePage />} />
          <Route path="/genres/:genre" element={<ListingPage />} />
          <Route path="/platforms/:id" element={<ListingPage />} />
          <Route path="/developers/:id" element={<ListingPage />} />
          <Route path="/publishers/:id" element={<ListingPage />} />
          <Route path="/tags/:id" element={<ListingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          {/* catchallroutes */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
