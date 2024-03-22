const Box = ({ key, width, height, color }) => {
    return (
        <div style={{ backgroundColor: color, width: width, height: height }}>
            {key}
        </div>
    );
};

export default Box;