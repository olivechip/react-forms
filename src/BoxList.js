import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css"

const BoxList = (props) => {
    // initial state for list of boxes
    const INITIAL_STATE = [
        { id: 1, width: 60, height: 60, color: "green" },
        { id: 2, width: 60, height: 60, color: "red" }
    ]

    // state for generating new unique IDs
    const [idCount, setIdCount] = useState(3);

    // state for managing list of boxes
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    // function to add new box to list
    const addBox = (width, height, color) => {
        // update boxes state with new box
        setBoxes(boxes => [...boxes, { id: idCount, width: parseFloat(width), height: parseFloat(height), color }]);
        setIdCount(idCount+1); // update idCount state for the next box
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={ addBox }/>
            <hr></hr>
            <div>
                <h3>Box List</h3>
                {boxes.map(({ id, width, height, color }) => 
                <Box 
                    key={id} 
                    width={width}
                    height={height}
                    color={color}
                />)}
            </div>
            <hr></hr>
        </div>
    );
};

export default BoxList;