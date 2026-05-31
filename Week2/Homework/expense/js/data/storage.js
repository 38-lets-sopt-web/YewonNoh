const EXPENSE_STORAGE_KEY = 'expenseData';

let cache = null;

export function initData(initialData) {
  if (localStorage.getItem(EXPENSE_STORAGE_KEY) === null) {
    localStorage.setItem(EXPENSE_STORAGE_KEY, JSON.stringify(initialData));
    cache = initialData;
  }
}

export function getData() {
  if (cache !== null) return cache;

  try {
    cache = JSON.parse(localStorage.getItem(EXPENSE_STORAGE_KEY)) || [];
  } catch {
    cache = [];
  }

  return cache;
}

export function saveData(data) {
  localStorage.setItem(EXPENSE_STORAGE_KEY, JSON.stringify(data));
  cache = data;
}
