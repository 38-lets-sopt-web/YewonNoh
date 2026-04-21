const EXPENSE = 'expenseData';

export function initData(initialData) {
  if (!localStorage.getItem(EXPENSE)) {
    localStorage.setItem(EXPENSE, JSON.stringify(initialData));
  }
}

export function getData() {
  return JSON.parse(localStorage.getItem(EXPENSE)) || [];
}

export function saveData(data) {
  localStorage.setItem(EXPENSE, JSON.stringify(data));
}
