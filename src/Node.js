import './styles/Node.css';

const Node = (props) => {
    return (
        <button className={"node-box" + (props.selected? " selected" : "")}
                style={{
                border: "6px solid " + (props.hasBeenPlaced? "lime" : "#090909")
                }}
                onClick={props.onClick}
        >

            <p>{props.index}</p>
            <img src={(props.isCone === undefined)? "images/hybrid.png" : (props.isCone)? "/images/cone.png" : "/images/cube.png"} alt="Game Piece" />
        </button>
    );
}

export default Node;