import React, { useEffect, useState } from 'react';
import Installment from './Installment';

const Installments = ({montante, juros, periodo}) => {
    const [parcelas, setParcelas] = useState([]);

    useEffect(() => {
        const calculateTotal = (index) => {
            return montante * ((1 + (juros / 100)) ** index);
        }

        let newParcelas = [];

        for (let i = 1; i <= periodo; i++) {    
            let capital = calculateTotal(i).toFixed(2);
            let jrx = (calculateTotal(i) - montante).toFixed(2);
            let perc = (((calculateTotal(i) - montante) / montante) * 100).toFixed(2);   
            
            let parcela = {
                capital,
                jrx,
                perc,
                index: i
            }

            newParcelas.push(parcela);
        }

        setParcelas(newParcelas);
    }, [montante, juros, periodo]);

    return (
        <div className="row">
            {parcelas.map((parcela, index) => (
                <Installment {...parcela} key={index} />
            ))}
        </div>
    );
}

export default Installments;