import React, { useEffect, useState } from "react";

const Values = ({ selectedTimeInterval }) => {
    const [randomData, setRandomData] = useState([]);

     useEffect(() => {
         if (selectedTimeInterval !== null){
           generateValues();
         }
     }, [selectedTimeInterval]);
    useEffect(() => {
        generateValues();
    }, []);
    
    const generateValues = () => {
        // Logic to generate random values based on the selected time interval
        const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
        const updatedData = [
            { key: 'EMA(20)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'SMA(20)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'RSI(14)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'Awesome Osc.', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'Macd(12,26,9)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'CCI(20)', value: getRandomNumber(10000, 20000).toFixed(2) }
        ];
        setRandomData(updatedData);
    };

    return (
        <div className="values-grid box-grid">
            {randomData.map(({ key, value }) => (
                <div key={key}>
                    <p className="value-1">{value}</p>
                    <p className="value-2">{key}</p>
                </div>
            ))}
        </div>
    );
};

export default Values;

