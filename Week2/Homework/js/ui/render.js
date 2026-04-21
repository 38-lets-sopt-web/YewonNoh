import { formatAmount } from "../utils/formatAmount.js";
import { openDetailModal } from "./modal.js";

export function render(list, dom) {
  const { tbody, totalEl } = dom.table;

  tbody.innerHTML = "";
  let total = 0;

  list.forEach((item) => {
    total += item.amount;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><input type="checkbox" class="expense-row-checkbox" data-id="${item.id}" /></td>
      <td class="expense-title-cell">${item.title}</td>
      <td class="${item.amount > 0 ? "plus" : "minus"}">
        ${formatAmount(item.amount)}
      </td>
      <td>${item.date}</td>
      <td>${item.category}</td>
      <td>${item.payment}</td>
    `;

    tr.querySelector(".expense-title-cell").addEventListener("click", () => {
      openDetailModal(item, dom.detail);
    });

    tbody.appendChild(tr);
  });

  totalEl.textContent = formatAmount(total);
  totalEl.className = total > 0 ? "plus" : total < 0 ? "minus" : "";

  const all = document.querySelectorAll(".expense-row-checkbox");
  const checked = document.querySelectorAll(".expense-row-checkbox:checked");

  dom.table.checkAll.checked = all.length > 0 && all.length === checked.length;
}
