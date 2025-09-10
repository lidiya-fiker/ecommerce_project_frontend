import dayjs from "dayjs";
import { money } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {cart.map(
        (cartItem) =>
          deliveryOptions.length > 0 &&
          cartItem.items.map((item) => {
            const selectedDeliveryOption = deliveryOptions.find(
              (deliveryOption) => deliveryOption.id === item.deliveryOption.id,
            );

            return (
              <>
                <div key={item.product.id} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date :{" "}
                    {dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
                      "dddd, MMMM D",
                    )}
                  </div>
                  <div className="cart-item-details-grid">
                    <img className="product-image" src={item.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">{item.product.name}</div>
                      <div className="product-price">
                        {money(item.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity:{" "}
                          <span className="quantity-label">
                            {item.quantity}
                          </span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <DeliveryOptions
                      item={item}
                      deliveryOptions={deliveryOptions}
                    />
                  </div>
                </div>
              </>
            );
          }),
      )}
    </div>
  );
}
