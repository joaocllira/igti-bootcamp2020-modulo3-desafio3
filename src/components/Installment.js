import React from 'react';

const Installment = ({capital, jrx, perc, index}) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
    }

    let valuesColor = jrx >= 0 ? "#32CD32" : "red"
    let percColor = perc >= 0 ? "blue" : "orange";

    return (
        <div className="col s2 box-wrapper">
            <div className="box">
                <div className="periodo-index">
                    {index}
                </div>
                <div className="values">
                    <p style={{color: valuesColor, fontWeight: "500"}}>{formatNumber(capital)}</p>
                    <p style={{color: valuesColor, fontWeight: "500"}}>{jrx >= 0 ? '+' : ''}{formatNumber(jrx)}</p>
                    <p style={{color: percColor}}>{perc}%</p>
                </div>
            </div>                        
        </div>
    );
}

export default Installment;