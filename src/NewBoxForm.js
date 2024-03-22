import { useState } from "react";

const idCount = 2

const NewBoxForm = () => {
    const INITIAL_STATE = {
        width:0,
        height:0,
        color:""
    };

    const [ boxInfo, setBoxInfo ] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoxInfo(boxInfo => ({
            ...boxInfo, 
            [name]: value,
            [id]: 
        }))
    }
    const handleSubmit = (e) => {
        const { width, height, color } = boxInfo
        e.preventDefault();
        alert(`created new box of ${width}px x ${height}px and color ${color}`);
        setBoxInfo("");
    }
    return (
        <div>
            <h3>New Box Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Width: </label>
                <input id="width "type="number" placeholder="enter a number" name="width" value={boxInfo.width} onChange={handleChange}></input>
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