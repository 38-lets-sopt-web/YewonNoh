export function getFilteredData(data, filters) {
  const { title, type, category, payment } = filters;

  return data.filter(d =>
    (!title || d.title.toLowerCase().includes(title)) &&
    (type === '전체' || (type === '수입' ? d.amount > 0 : d.amount < 0)) &&
    (category === '전체' || d.category === category) &&
    (payment === '전체' || d.payment === payment)
  );
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
