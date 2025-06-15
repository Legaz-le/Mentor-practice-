interface Item {
  name: string;
  category: string;
  image: {
    thumbnail: string;
    tablet: string;
    mobile: string;
    desktop: string;
  };
  price: number;
}

interface CartProps {
  cart: { [key: string]: number };
  items: Item[];
  onRemove: (name: string) => void;
  setOrderConfirmed: (value: boolean) => void;
}

const Cart = ({ cart, items, onRemove, setOrderConfirmed }: CartProps) => {
  const cartItems = items.filter((item) => cart[item.name]);

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * (cart[item.name] || 0),
    0
  );
  return (
    <div className="bg-white p-5 w-full sm:max-w-md mx-auto">
  {cartItems.length > 0 ? (
    <div className="flex flex-col w-full">
      <p className="text-Red font-bold text-xl mb-5">
        Your cart ({cartItems.length})
      </p>

      <ul>
        {cartItems.map((item) => (
          <li key={item.name} className="mb-4">
            <p className="font-semibold text-Rose-900">{item.name}</p>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="flex flex-wrap gap-3 text-sm">
                <span className="text-Red font-semibold">
                  {cart[item.name]}x
                </span>
                <span className="text-Rose-400">
                  @ ${item.price.toFixed(2)}
                </span>
                <span className="text-Rose-900">
                  ${(item.price * (cart[item.name] || 0)).toFixed(2)}
                </span>
              </p>
              <img
                src="/assets/images/icon-remove-item.svg"
                alt="remove"
                onClick={() => onRemove(item.name)}
                className="cursor-pointer w-5 h-5"
              />
            </div>
            <div className="border border-Rose-300/20 mt-4" />
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6 text-base">
        <p>Order Total</p>
        <span className="text-Rose-900 font-bold">
          ${orderTotal.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-center items-center mt-5 bg-Rose-100 p-4 rounded-lg text-sm gap-2">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="carbon-icon"
          className="w-6 h-6"
        />
        <p>
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <button
        className="bg-Red p-3 mt-7 rounded-full text-white font-medium w-full"
        onClick={() => setOrderConfirmed(true)}
      >
        Confirm Order
      </button>
    </div>
  ) : (
    <div className="w-full">
      <p className="text-Red font-bold lg:text-xl mb-5 md:text-[10px]">
        Your cart ({cartItems.length})
      </p>
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/illustration-empty-cart.svg"
          alt="empty-cart"
          className="w-40 h-40 "
        />
      </div>
      <p className="text-center text-Rose-900 font-normal md:text-[10px] lg:text-sm mt-3 ">
        Your added items will appear here
      </p>
    </div>
  )}
</div>
  );
};

export default Cart;
