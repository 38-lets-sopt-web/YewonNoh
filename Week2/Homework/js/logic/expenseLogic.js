export function getFilteredData(data, filters) {
  let filtered = [...data];

  const { title, type, category, payment } = filters;

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

  return filtered;
}

export function getSortedData(list, sortType) {
  return [...list].sort((a, b) => {
    return sortType === 'asc'
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });
}

export function deleteSelected(data, ids) {
  return data.filter(d => !ids.includes(d.id));
}
