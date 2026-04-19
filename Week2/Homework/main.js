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

const titleInput = document.querySelector('input[type="text"]');
const selects = document.querySelectorAll('.filter-item select');
const applyBtn = document.querySelector('.apply');
const resetBtn = document.querySelector('.reset');

const modal = document.getElementById('expense-modal-overlay');
const amountInput = document.getElementById('input-amount');
const openBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeModal');
const submitBtn = document.getElementById('submitBtn');

amountInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

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
      <td><input type="checkbox" class="expense-row-checkbox" data-id="${item.id}" /></td>
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
  totalEl.className = total > 0 ? 'plus' : total < 0 ? 'minus' : '';
}

function sortData(type) {
  const sorted = [...data].sort((a, b) => {
    return type === 'asc'
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });
  render(sorted);
}

function filterData() {
  let filtered = [...data];

  const title = titleInput.value.toLowerCase();
  const type = selects[0].value;
  const category = selects[1].value;
  const payment = selects[2].value;

  if (title) {
    filtered = filtered.filter(d =>
      d.title.toLowerCase().includes(title)
    );
  }

  if (type !== '전체') {
    filtered = filtered.filter(d =>
      type === '수입' ? d.amount > 0 : d.amount < 0
    );
  }

  if (category !== '전체') {
    filtered = filtered.filter(d => d.category === category);
  }

  if (payment !== '전체') {
    filtered = filtered.filter(d => d.payment === payment);
  }

  render(filtered);
}

function resetFilter() {
  titleInput.value = '';
  selects.forEach(s => (s.value = '전체'));
  render(data);
}

function deleteSelected() {
  const checked = document.querySelectorAll('.expense-row-checkbox:checked');
  const ids = [...checked].map(cb => Number(cb.dataset.id));

  data = data.filter(d => !ids.includes(d.id));
  save();
  sortData(sortSelect.value);
}

checkAll.addEventListener('change', () => {
  document.querySelectorAll('.expense-row-checkbox').forEach(cb => {
    cb.checked = checkAll.checked;
  });
});

document.addEventListener('change', e => {
  if (e.target.classList.contains('expense-row-checkbox')) {
    const all = document.querySelectorAll('.expense-row-checkbox');
    const checked = document.querySelectorAll('.expense-row-checkbox:checked');
    checkAll.checked = all.length === checked.length;
  }
});

deleteBtn.addEventListener('click', deleteSelected);

sortSelect.addEventListener('change', e => {
  sortData(e.target.value);
});

applyBtn.addEventListener('click', filterData);
resetBtn.addEventListener('click', resetFilter);

sortData('desc');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

submitBtn.addEventListener('click', () => {
  const title = document.getElementById('input-title').value;
  const type = document.getElementById('input-type').value;
  const amount = document.getElementById('input-amount').value;
  const date = document.getElementById('input-date').value;
  const category = document.getElementById('input-category').value;
  const payment = document.getElementById('input-payment').value;

  if (!title || !amount || !date || !category || !payment) {
    alert('값을 입력하세요');
    return;
  }

  const newItem = {
    id: Date.now(),
    title,
    date,
    category,
    payment,
    amount: type === '수입' ? Number(amount) : -Number(amount)
  };

  data.push(newItem);
  save();

  modal.classList.remove('active');
  sortData(sortSelect.value);
});