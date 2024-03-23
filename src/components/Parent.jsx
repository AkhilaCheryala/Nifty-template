import React, { useState } from "react";
import Timebtn from "./Timebtn";
import Values from "./Values"; 
import Random from "./Random";

const ParentComponent = () => {
    const [selectedTimeInterval, setSelectedTimeInterval] = useState(null);
 
    const handleButtonClick = (timeInterval) => {
        console.log("Selected time interval:", timeInterval);
        setSelectedTimeInterval(timeInterval);
    };

    return (
        <div>
            <Timebtn onButtonClick={handleButtonClick} />
            {selectedTimeInterval !== null && <Values selectedTimeInterval={selectedTimeInterval} />}
            {selectedTimeInterval !== null && <Random selectedTimeInterval={selectedTimeInterval} />}
        </div>
    );
};

export default ParentComponent;
