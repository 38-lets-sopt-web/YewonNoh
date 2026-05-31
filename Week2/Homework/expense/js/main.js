import { expenses as initialData } from "./data/expenseData.js";
import { initData, getData } from "./data/storage.js";
import { getFilteredData, getSortedData } from "./logic/expenseLogic.js";
import { render } from "./ui/render.js";
import { bindEvents } from "./events/bindEvents.js";
import { dom } from "./dom/domElements.js";

initData(initialData);

const state = {
  data: getData(),
  filters: {
    title: "",
    type: "전체",
    category: "전체",
    payment: "전체",
  },
  sortOrder: "desc",
};

function updateView() {
  const filtered = getFilteredData(state.data, state.filters);
  const sorted = getSortedData(filtered, state.sortOrder);

  render(sorted, dom);
}

bindEvents(state, dom, updateView);

updateView();
