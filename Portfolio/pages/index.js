import react from "react";
import Header from "../src/components/header/Header";
import Projetos from '../src/components/projetos/Projetos';
import { Sobre } from '../src/components/sobre/Sobre';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Header />
            <Sobre />
            <Projetos />
        </ div>

    )
}

export default App;