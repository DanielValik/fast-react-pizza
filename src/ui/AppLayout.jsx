import Header from "./Header";
import CardOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />
      <SearchOrder />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CardOverview />
    </div>
  );
}

export default AppLayout;
