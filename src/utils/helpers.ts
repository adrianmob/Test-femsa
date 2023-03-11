export const convertDate = (date: string) => {
  return new Date(date).toLocaleString('es-Mx', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
