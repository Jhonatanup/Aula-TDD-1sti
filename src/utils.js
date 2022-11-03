// preparaListaASerExibida(lista, pagina);
export const preparaListaASerExibida = (lista, pagina, itemPorPagina) => {
  const index = (pagina - 1) * itemPorPagina;
  if (pagina === 1) {
    return lista?.slice(0, itemPorPagina);
  }
  return lista?.slice(index, index + itemPorPagina);
};

// export const checaSeTaNoFinal = (lista, pagina, itemPorPagina) => {
//   const finalPage = lista?.length / itemPorPagina;
//   return finalPage.toFixed(0) === pagina;
// };
