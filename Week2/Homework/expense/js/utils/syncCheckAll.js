export function syncCheckAll(checkAllEl) {
  const all = document.querySelectorAll(".expense-row-checkbox");
  const checked = document.querySelectorAll(".expense-row-checkbox:checked");

  if (all.length === 0) {
    checkAllEl.checked = false;
    return;
  }

  checkAllEl.checked = all.length === checked.length;
}
