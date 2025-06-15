interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    tablet: string;
    mobile: string;
    desktop: string;
  };
}

interface ConfirmedProps {
  order: boolean;
  cartItems: CartItem[];
  onClose: () => void;
}
const Confirmed = ({ order, cartItems, onClose }: ConfirmedProps) => {
  return (
    <>
      {order && (
        <div className="fixed inset-0 p-4 bg-black/75 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white p-8 rounded-lg w-full max-w-md md:max-w-xl relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Confirmation header */}
            <div className=" mb-6">
              <img
                src="assets/images/icon-order-confirmed.svg"
                alt="confirmed-icon"
                className=" h-16 w-16 mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Order Confirmed!
              </h1>
              <p className="text-gray-600">We hope you enjoy your food!</p>
            </div>

            {/* Order summary */}
            <div className="py-6 my-6 bg-Rose-100 px-5">
              <h2 className="text-lg font-semibold mb-4">Your Order:</h2>

              <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image.thumbnail}
                        alt={item.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-[600] text-Rose-900">{item.name}</p>
                        <p className="text-s text-Red">
                          x{item.quantity} <span className="text-Rose-400">@ ${item.price.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Order totals */}
              <div className="mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>
                    $
                    {cartItems
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span>
                    $
                    {(
                      cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      ) * 0.1
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-[700] text-Rose-900">
                    $
                    {(
                      cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      ) * 1.1
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            {/* Estimated delivery */}
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium">Estimated Delivery Time</p>
                  <p className="text-gray-600">30-45 minutes</p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={onClose}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmed;
