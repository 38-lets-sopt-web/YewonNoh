export function validateInput(inputs) {
  const { title, amount, date, category, payment } = inputs;

  if (
    !title.value ||
    !amount.value ||
    !date.value ||
    category.value === "선택" ||
    payment.value === "선택"
  ) return false;

  return true;
}
