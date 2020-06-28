import React, { useState, useEffect } from 'react';

const Form = ({returnValues}) => {
    const [montante, setMontante] = useState(1000);
    const [juros, setJuros] = useState(1.0);
    const [periodo, setPeriodo] = useState(1);

    useEffect(() => {
        returnValues({
            montante,
            juros,
            periodo
        })
    }, [montante, juros, periodo, returnValues]);

    return (
        <div className="row">
            <ValueInput id="montante" description="Montante Inicial"
                value={montante} step={100} min={1000} max={100000}
                onChange={(event) => setMontante(event.target.value)} />

            <ValueInput id="juros" description="Taxa de Juros Mensal"
                value={juros} step={0.1} min={-12.0} max={12.0}
                onChange={(event) => setJuros(event.target.value)} />

            <ValueInput id="periodo" description="Período (meses)"
                value={periodo} step={1} min={1} max={36}
                onChange={(event) => setPeriodo(event.target.value)} />
        </div>
    );
}

const ValueInput = (props) => {
    return (
        <div className="input-field col s4">
            <input {...props} type="number" className="validate" />
            <label for={props.id}>{props.description}</label>
        </div>
    );
}

export default Form;