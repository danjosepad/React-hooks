import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native', 'NodeJS']);
  const [newTech, setNewTech] = useState(''); // Define o state e o seu "set"

  useEffect(() => {
    const storage = localStorage.getItem('tech');

    if (storage) {
      setTechs(JSON.parse(storage));
    }
  }, []); // ComponentDidMount, quando o component é montado, chama os dados

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs));
  }, [techs]); // ComponentDidUpdate, quando o techs muda, chama o useEffect

  function handleNewTech() {
    setTechs([...techs, newTech]);
  }

  const techSize = useMemo(() => techs.length, [techs]);
  // Valor só vai ser alterado quando o techs for alterado,
  // Não sendo atualizado toda vez que o componente altera algo

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você aprendeu {techSize} tecnologias</strong>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={() => handleNewTech('Teste')}>
        Adicionar nova tecnologia
      </button>
    </>
  );
}

export default App;
