import Cart from './components/Cart.jsx';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './components/cart/CartContext.jsx';
import { UserProgressContextProvider } from './components/cart/UserProgressContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
