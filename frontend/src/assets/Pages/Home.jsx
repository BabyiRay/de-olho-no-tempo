import { useState } from 'react';
import heroImg from '../hero.png';
import reactLogo from '../react.svg';
import viteLogo from '../vite.svg';
import Header from '../../Header';

function Home() {
  const [contador, setContador] = useState(0);

  function increment() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  return (
    <section id="center">
      <Header title="Bem vindo!" />

      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      <p>
        <input type="button" value="Clique" onClick={increment} />
      </p>

      <p>
        <span>{contador}</span> Cliques!
      </p>

      <div>
        <h1>Projeto Integrador</h1>
      </div>
    </section>
  );
}

export default Home;