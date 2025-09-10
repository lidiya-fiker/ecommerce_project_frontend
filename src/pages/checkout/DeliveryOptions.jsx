import dayjs from "dayjs";
import { money } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, item }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";
        if (deliveryOption.priceCents > 0) {
          priceString = `${money(deliveryOption.priceCents)} -Shipping`;
        }
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOption.id === item.deliveryOption.id}
              className="delivery-option-input"
              name={`delivery-option-${item.product.id}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTime).format(
                  "dddd, MMMM D ",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
