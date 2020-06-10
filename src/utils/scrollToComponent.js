export const ScrollToComponent = id => {
  const anchor = document.querySelector(id);
  anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
