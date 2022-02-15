import react from "react";
import Header from "../src/components/Header";
import { Sobre } from '../src/components/Sobre';

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
        </ div>

    )
}

export default App;