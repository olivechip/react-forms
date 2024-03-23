import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width:0,
        height:0,
        color:""
    };

    const [ boxInfo, setBoxInfo ] = useState(INITIAL_STATE);
    // const [ idCount, setidCount] = useState(3);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoxInfo(boxInfo => ({
            ...boxInfo,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        const { width, height, color } = boxInfo
        e.preventDefault();
        alert(`created new box of ${width}px x ${height}px and color ${color}`);
        addBox(width, height, color);
        setBoxInfo(INITIAL_STATE);
    }

    return (
        <div>
            <h3>New Box Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Width: </label>
                <input id="width" type="number" placeholder="enter a number" name="width" value={boxInfo.width} onChange={handleChange}></input>
                <label htmlFor="height">Length: </label>
                <input id="height" type="number" placeholder="enter a number" name="height" value={boxInfo.height} onChange={handleChange}></input>
                <label htmlFor="color">Color: </label>
                <input id="color" type="color" name="color" value={boxInfo.color} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewBoxForm;