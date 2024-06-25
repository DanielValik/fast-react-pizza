import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-around border-b border-stone-300 bg-yellow-500 px-4 py-3 font-serif uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
