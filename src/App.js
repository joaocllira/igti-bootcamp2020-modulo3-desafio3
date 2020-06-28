import React, { useCallback, useState } from 'react';
import './styles/app.css';
import Form from './components/Form';
import Installments from './components/Installments';

const App = () => {
    const [values, setValues] = useState({
        montante: 1000,
        juros: 1.0,
        periodo: 1
    });

    const retrieveValues = useCallback((newValues) => {
        setValues(newValues);
    }, []);

    return (
        <div className="container"> 
            <div className="row">
                <div className="col s12 center">
                    <h2>React - Juros Compostos</h2>
                </div>
            </div>
            
            <Form returnValues={retrieveValues} />
            
            <Installments {...values} />
        </div>
    );
}

export default App;
