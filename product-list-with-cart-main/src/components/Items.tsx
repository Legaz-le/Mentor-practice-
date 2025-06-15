import { useMediaQuery } from "react-responsive"

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
interface ItemProps {
  item: Item;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const Items = ({ item,quantity, onQuantityChange }: ItemProps) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  

  const increment = () => {
   onQuantityChange(quantity + 1);
  };

 const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
      
      // Automatically switch back to "Add to Cart" when quantity reaches 0
      if (newQuantity === 0) {
        // This is handled automatically in the render logic
      }
    }
  };

  const addToCart = () => {
    onQuantityChange(1);
  };

 
  const showQuantityControls = quantity > 0;
  return (
    <>
      <div className="p-4">
        <div className="relative  group mb-6 overflow-visible">
          <img
            src={isDesktopOrLaptop ? item.image.desktop : isTablet ? item.image.tablet : item.image.mobile}
            alt={item.name}
            className={`rounded-2xl object-cover ${showQuantityControls ? 'border-2 border-Red' : ''}`}
          />
          <div
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center rounded-full w-[80%] min-h-[40px]"
            
          >
            {showQuantityControls ? (
              <div className="bg-red-500 flex justify-between items-center w-full py-2 px-3 rounded-full">
                <button onClick={decrement} className="p-1">
                  <img
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="minus"
                    className="w-3 h-3"
                  />
                </button>

                <p className="text-white font-semibold">{quantity}</p>

                <button onClick={increment} className="p-1">
                  <img
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="plus"
                    className="w-3 h-3"
                  />
                </button>
              </div>
            ) : (
              <div className="bg-white flex justify-center items-center gap-2 w-full py-2 px-4 rounded-full cursor-pointer hover:border-Red border-1 border-Red transition-colors"
              onClick={addToCart}>
                <img
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="cart-icon"
                  className="w-5 h-5 "
                />
                <p className="font-[600] hover:text-Red md:text-[9px] lg:text-sm ">Add to Cart</p>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-Rose-300 font-[600] ">{item.category}</h1>
        <h2 className="text-[15px] font-bold">{item.name}</h2>
        <span className="text-Red">${item.price.toFixed(2)}</span>
      </div>
    </>
  );
};

export default Items;
