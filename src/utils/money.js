export function money(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}
