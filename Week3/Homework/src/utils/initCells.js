const initCells = (size) => {
  return Array.from({ length: size * size }, (_, i) => ({
    id: i,
    type: null,
    active: false,
  }));
};

export default initCells;
