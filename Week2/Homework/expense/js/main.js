import { expenses as initialData } from "./data/expenseData.js";
import { initData, getData } from "./data/storage.js";
import { getFilteredData, getSortedData } from "./logic/expenseLogic.js";
import { render } from "./ui/render.js";
import { bindEvents } from "./events/bindEvents.js";
import { dom } from "./dom/domElements.js";

initData(initialData);

const state = {
  data: getData(),
};

function updateView() {
  const filters = {
    title: dom.filter.titleInput.value.toLowerCase(),
    type: dom.filter.selects[0].value,
    category: dom.filter.selects[1].value,
    payment: dom.filter.selects[2].value,
  };

  const filtered = getFilteredData(state.data, filters);
  const sorted = getSortedData(filtered, dom.table.sortSelect.value);

  render(sorted, dom);
}

bindEvents(state, dom, updateView);

updateView();
