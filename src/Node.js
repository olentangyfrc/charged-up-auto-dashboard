import './styles/Node.css';

const Node = (props) => {
    return (
        <div className="node-box" style={{
                border: props.hasBeenPlaced? "6px solid lime" : "none",
            }}>

            <p>{props.index}</p>
            <img src={props.isCone? "/images/cone.png" : "/images/cube.png"} alt="" />
        </div>
    );
}

export default Node;