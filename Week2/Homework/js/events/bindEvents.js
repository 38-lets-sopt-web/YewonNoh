import { deleteSelected } from "../logic/expenseLogic.js";
import { saveData } from "../data/storage.js";
import { openModal, closeModal } from "../ui/modal.js";

export function bindEvents(state, dom, updateView) {
  /* 숫자 입력 제한 */
  dom.modal.inputs.amount.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  });

  /* 전체 체크 */
  dom.table.checkAll.addEventListener("change", () => {
    document.querySelectorAll(".expense-row-checkbox").forEach((cb) => {
      cb.checked = dom.table.checkAll.checked;
    });
  });

  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("expense-row-checkbox")) {
      const all = document.querySelectorAll(".expense-row-checkbox");
      const checked = document.querySelectorAll(
        ".expense-row-checkbox:checked",
      );
      dom.table.checkAll.checked = all.length === checked.length;
    }
  });

  /* 선택 삭제 */
  dom.table.deleteBtn.addEventListener("click", () => {
    const checked = document.querySelectorAll(".expense-row-checkbox:checked");
    const ids = [...checked].map((cb) => Number(cb.dataset.id));

    state.data = deleteSelected(state.data, ids);
    saveData(state.data);
    updateView();
  });

  /* 필터 */
  dom.table.sortSelect.addEventListener("change", updateView);
  dom.filter.applyBtn.addEventListener("click", updateView);

  dom.filter.resetBtn.addEventListener("click", () => {
    dom.filter.titleInput.value = "";
    dom.filter.selects.forEach((s) => (s.value = "전체"));

    document.querySelectorAll(".expense-row-checkbox").forEach((cb) => {
      cb.checked = false;
    });

    dom.table.checkAll.checked = false;

    updateView();
  });

  /* 모달 */
  dom.modal.openBtn.addEventListener("click", () =>
    openModal(dom.modal.container),
  );
  dom.modal.closeBtn.addEventListener("click", () =>
    closeModal(dom.modal.container),
  );

  dom.modal.container.addEventListener("click", (e) => {
    if (e.target === dom.modal.container) closeModal(dom.modal.container);
  });

  /* 상세 모달 */
  dom.detail.closeBtn.addEventListener("click", () => {
    closeModal(dom.detail.container);
  });

  dom.detail.container.addEventListener("click", (e) => {
    if (e.target === dom.detail.container) {
      closeModal(dom.detail.container);
    }
  });

  /* 데이터 추가 */
  dom.modal.submitBtn.addEventListener("click", () => {
    const { title, amount, type, date, category, payment } = dom.modal.inputs;

    if (
      !title.value ||
      !amount.value ||
      !date.value ||
      !category.value ||
      !payment.value
    ) {
      alert("값을 입력하세요");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: title.value,
      date: date.value,
      category: category.value,
      payment: payment.value,
      amount:
        type.value === "수입" ? Number(amount.value) : -Number(amount.value),
    };

    state.data.push(newItem);
    saveData(state.data);

    closeModal(dom.modal.container);
    updateView();
  });
}
