import Header from '../src/components/header/Header';
import Projetos from '../src/components/projetos/Projetos';
import { Skils } from '../src/components/skils/Skils';
import { Sobre } from '../src/components/sobre/Sobre';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Sobre />
      <Projetos />
      <Skils />
    </div>
  );
};

export default App;
