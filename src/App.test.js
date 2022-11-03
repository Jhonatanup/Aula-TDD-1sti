import { render, screen } from "@testing-library/react";
import App from "./App";

const lista = [0, 1, 2, 3, 4, 5, 6];

test("Renderiza no maximo 3 items por pagina", async () => {
  render(<App list={lista} />);
  const posts = await screen.findAllByTestId("post-item");
  expect(posts.length).toBeLessThan(4);
});

test("Renderiza um botao de prev", async () => {
  render(<App />);
  const prevButton = await screen.findByTestId("prev-button");
  expect(prevButton).toBeInTheDocument();
});

test("Renderiza um botao de next", async () => {
  render(<App />);
  const nextButton = await screen.findByTestId("next-button");
  expect(nextButton).toBeInTheDocument();
});

// test("Quando e somente quando a lista estiver no inicial o botao de prev fica desativado", async () => {
//   render(<App initialPage={true} />);
//   const prevButton = await screen.findByTestId("prev-button");
//   expect(prevButton).toBeDisabled();
// });

// test("Quando e somente quando a lista estiver no inicial o botao de next fica desativado", async () => {
//   render(<App finalPage={true} />);
//   const nextButton = await screen.findByTestId("next-button");
//   expect(nextButton).toBeDisabled();
// });
