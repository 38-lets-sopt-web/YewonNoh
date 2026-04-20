import { formatAmount } from '../utils/formatAmount.js';

export function openModal(modal) {
  modal.classList.add('active');
}

export function closeModal(modal) {
  modal.classList.remove('active');
}

export function openDetailModal(item, detail) {
  detail.elements.title.textContent = item.title;
  detail.elements.amount.textContent = formatAmount(item.amount);
  detail.elements.date.textContent = item.date;
  detail.elements.category.textContent = item.category;
  detail.elements.payment.textContent = item.payment;
  detail.container.classList.add('active');
}
