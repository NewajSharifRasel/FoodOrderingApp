import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((tatalNumberOfItems, item) => {
    console.log(tatalNumberOfItems + "rasel" + item.quantity);
    return tatalNumberOfItems + item.quantity;
  }, 0);
  console.log(totalCartItems);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurent" />
        <h1>ReactFood</h1>
      </div>
      <nav className="cart-item-actions">
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
