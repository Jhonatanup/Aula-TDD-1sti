import { useState } from "react";
import { preparaListaASerExibida } from "./utils";
const NUMERO_ITEMS_PAGINA = 3;

function App({ list, initialPage, finalPage }) {
  const [pagina, setPagina] = useState(1);
  const listaASerExibida = preparaListaASerExibida(
    list,
    pagina,
    NUMERO_ITEMS_PAGINA
  );

  const lidaComODecrescimoNoNumeroDePagina = () => {
    //TODO: Jogar a logica para o utils setPagina(funcaoquecrieietestei())
    if (pagina === 1) {
      return;
    }
    setPagina(pagina - 1);
  };

  const lidaComOAcrescimoNoNumeroDePagina = () => {
    setPagina(pagina + 1);
  };

  return (
    <div>
      <ul>
        {listaASerExibida?.map((post) => (
          <li data-testid="post-item" key={post}>
            {post}
          </li>
        ))}
      </ul>
      <button
        data-testid="prev-button"
        disabled={pagina === 1}
        onClick={lidaComODecrescimoNoNumeroDePagina}
      >
        prev
      </button>
      <button
        data-testid="next-button"
        // disabled={() => console.log("TODO: implementar checaSeTaNoFinal")}
        onClick={lidaComOAcrescimoNoNumeroDePagina}
      >
        next
      </button>
    </div>
  );
}

export default App;
