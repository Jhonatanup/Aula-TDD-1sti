import { preparaListaASerExibida, checaSeTaNoFinal } from "./utils";
const arrayLista = [0, 1, 2, 3, 4, 5, 6];

test("Dada uma lista, seja retornado 3 items no maximo", () => {
  let lista = preparaListaASerExibida(arrayLista, 1, 3);
  expect(lista).toEqual(expect.arrayContaining([0, 1, 2]));
});

test("Dada uma lista no meio, seja retornado 3 items no maximo", () => {
  let lista = preparaListaASerExibida(arrayLista, 2, 3);
  expect(lista).toEqual(expect.arrayContaining([3, 4, 5]));
});

test("Dada uma lista no fim, seja retornado 3 items no maximo", () => {
  let lista = preparaListaASerExibida(arrayLista, 3, 3);
  console.log({ lista });
  expect(lista).toEqual(expect.arrayContaining([6]));
});

test.only("Retorna True para o inicio da lista", () => {
  let final = checaSeTaNoFinal(arrayLista, 3, 3);
  expect(final).toBeTruthy();
});

test.only("Retorna False para o final da list", () => {
  let final = checaSeTaNoFinal([0, 1, 2, 3, 4, 5, 6, 4, 5, 7], 4, 3);
  expect(final).toBeTruthy();
});
