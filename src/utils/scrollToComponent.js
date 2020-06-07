export const ScrollToComponent = () => {
  const anchor = document.querySelector('#scrollTo');
  anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
