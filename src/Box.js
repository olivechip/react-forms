import "./Box.css";

const Box = ({ width, height, color }) => {
    return (
        <div className="Box" style={{ 
            backgroundColor: color, 
            width: width, 
            height: height,
        }}>
        </div>
    );
};

export default Box;