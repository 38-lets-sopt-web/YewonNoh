export function formatAmount(amount) {
  return (amount > 0 ? '+' : '') + amount.toLocaleString();
}
