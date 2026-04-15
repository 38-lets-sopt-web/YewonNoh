import { expenses as initialData } from './expenseData.js';

const EXPENSE = 'expenseData';

if (!localStorage.getItem(EXPENSE)) {
  localStorage.setItem(EXPENSE, JSON.stringify(initialData));
}

let data = JSON.parse(localStorage.getItem(EXPENSE));

const tbody = document.getElementById('expense-body');
const totalEl = document.getElementById('total-amount');
const checkAll = document.getElementById('checkAll');
const deleteBtn = document.getElementById('deleteBtn');
const sortSelect = document.querySelector('.sort-select');

function save() {
  localStorage.setItem(EXPENSE, JSON.stringify(data));
}

function formatAmount(amount) {
  return (amount > 0 ? '+' : '') + amount.toLocaleString();
}

function render(list) {
  tbody.innerHTML = '';
  let total = 0;

  list.forEach(item => {
    total += item.amount;

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td><input type="checkbox" class="row-check" data-id="${item.id}" /></td>
      <td>${item.title}</td>
      <td class="${item.amount > 0 ? 'plus' : 'minus'}">
        ${formatAmount(item.amount)}
      </td>
      <td>${item.date}</td>
      <td>${item.category}</td>
      <td>${item.payment}</td>
    `;

    tr.querySelector('td:nth-child(2)').addEventListener('click', () => {
      alert(JSON.stringify(item, null, 2));
    });

    tbody.appendChild(tr);
  });

  totalEl.textContent = formatAmount(total);
  totalEl.className =total > 0 ? 'plus' : total < 0 ? 'minus' : '';
}

function sortData(type) {
  const sorted = [...data].sort((a, b) => {
    return type === 'asc'
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });
  render(sorted);
}

function deleteSelected() {
  const checked = document.querySelectorAll('.row-check:checked');
  const ids = [...checked].map(cb => Number(cb.dataset.id));

  data = data.filter(d => !ids.includes(d.id));
  save();
  sortData(sortSelect.value);
}

checkAll.addEventListener('change', () => {
  document.querySelectorAll('.row-check').forEach(cb => {
    cb.checked = checkAll.checked;
  });
});

document.addEventListener('change', e => {
  if (e.target.classList.contains('row-check')) {
    const all = document.querySelectorAll('.row-check');
    const checked = document.querySelectorAll('.row-check:checked');
    checkAll.checked = all.length === checked.length;
  }
});

deleteBtn.addEventListener('click', deleteSelected);

sortSelect.addEventListener('change', e => {
  sortData(e.target.value);
});

sortData('desc');