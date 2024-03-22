import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = (props) => {
    const INITIAL_STATE = [
        { id: 1, width: 20, height: 20, color: "green" },
        { id: 2, width: 20, height: 20, color: "red" }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    return (
        <div>
            <NewBoxForm />

            <div>
                {boxes.map(({ id, width, height, color }) => 
                <Box 
                    key={id} 
                    width={width}
                    height={height}
                    color={color}
                />)}
            </div>
        </div>
    );
};

export default BoxList;