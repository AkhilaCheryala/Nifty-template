import React, { useEffect, useState } from "react";

const Random = ({ selectedTimeInterval }) => {
    const [randomValues, setRandomValues] = useState([]);
    
    useEffect(() => {
        if (selectedTimeInterval !== null) {
            generateRandomValues();
        }
    }, [selectedTimeInterval]);
    useEffect(() => {
        generateRandomValues();
    }, []);

    const generateRandomValues = () => {
        const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
        const updatedData = [
            { key: 'EMA(5)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'SMA(5)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'EMA(15)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'SMA(20)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'EMA(7)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'EMA(8)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'EMA(22)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'SMA(50)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'EMA(21)', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'Ichikoku Baseline', value: getRandomNumber(10000, 20000).toFixed(2) },
            { key: 'Hull MA', value: getRandomNumber(10000, 20000).toFixed(2) }
        ];
        setRandomValues(updatedData);
    };

    return (
        <div className="Random-values">
            <p className="view-more">view more<span className="bi bi-caret-down-fill"></span> </p>
            {randomValues.map(({ key, value }) => (
                <div className="values" key={key}>
                    <p> <span className={'s'||'n'}>s</span>{key}
                    </p><p className="values-2">{value}</p>
                </div>
            ))}
        </div>
    );
}

export default Random;
