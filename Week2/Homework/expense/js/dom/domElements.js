export const dom = {
  /* header */
  header: {
    profileLink: document.querySelector('.reload')
  },

  /* filter */
  filter: {
    titleInput: document.querySelector('.filter-item.title input'),
    selects: document.querySelectorAll('.filter-item select'),
    applyBtn: document.querySelector('.apply'),
    resetBtn: document.querySelector('.reset'),
  },

  /* table */
  table: {
    tbody: document.getElementById('expense-body'),
    totalEl: document.getElementById('total-amount'),
    checkAll: document.getElementById('checkAll'),
    deleteBtn: document.getElementById('deleteBtn'),
    sortSelect: document.querySelector('.sort-select'),
  },

  /* add modal */
  modal: {
    container: document.getElementById('expense-modal-overlay'),
    openBtn: document.getElementById('addBtn'),
    closeBtn: document.getElementById('closeModal'),
    submitBtn: document.getElementById('submitBtn'),

    inputs: {
      title: document.getElementById('input-title'),
      amount: document.getElementById('input-amount'),
      type: document.getElementById('input-type'),
      date: document.getElementById('input-date'),
      category: document.getElementById('input-category'),
      payment: document.getElementById('input-payment'),
    }
  },

  /* detail modal */
  detail: {
    container: document.getElementById('expense-detail-overlay'),
    closeBtn: document.getElementById('closeDetailModal'),

    elements: {
      title: document.getElementById('detail-title'),
      amount: document.getElementById('detail-amount'),
      date: document.getElementById('detail-date'),
      category: document.getElementById('detail-category'),
      payment: document.getElementById('detail-payment'),
    }
  }
};