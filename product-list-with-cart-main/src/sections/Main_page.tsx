import Cart from "../components/Cart";
import Confirmed from "../components/Confirmed";
import Items from "../components/Items";
import data from "../constans/data.json";
import { useState } from "react";
const Main_page = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const updateQuantity = (itemName: string, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemName]: quantity,
    }));
  };
  const handleRemoveItem = (name: string) => {
    updateQuantity(name, 0);
  };
  const cartItems = data
    .filter((item) => cart[item.name] > 0)
    .map((item) => ({
      ...item,
      quantity: cart[item.name],
    }));
  const clearCart = () => {
    setCart({});
  };
  const handleCloseConfirmed = () => {
    setOrderConfirmed(false);
    clearCart();
  };
  return (
    <div className="flex min-h-screen justify-center items-start p-4">
      <div className="max-w-7xl w-full flex flex-col sm:flex-col md:flex-row  ">
      <div className="flex-1 p-">
        <h1 className="text-3xl font-[700] mb-4 ml-4">Desserts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.map((item, index) => (
            <Items
              key={index}
              item={item}
              quantity={cart[item.name] || 0}
              onQuantityChange={(quantity) =>
                updateQuantity(item.name, quantity)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 md:min-w-[200px] md:max-w-[250px] lg:min-w-[250px] lg:max-w-[320px] xl:max-w-[400px] w-full p-8 ">
        <Cart
          cart={cart}
          items={data}
          onRemove={handleRemoveItem}
          setOrderConfirmed={setOrderConfirmed}
        />
      </div>
      <Confirmed
        order={orderConfirmed}
        cartItems={cartItems}
        onClose={handleCloseConfirmed}
      />
      </div>
    </div>
  );
};

export default Main_page;
