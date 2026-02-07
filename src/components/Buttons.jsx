

export default function Buttons({ onClick, onEqual, onClear }) {

const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+",];


    return (
    <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
    }}>
   
    
    {buttons.map((btn) => (
    <button
        key={btn}
        onClick={() => (btn === "=" ? onEqual() : onClick(btn))}
        style={{ height: "40px", fontSize: "16px" }}
        className="bttn"
    >
    {btn}
    </button>
    ))}
    <button
    onClick={onClear}
    style={{ gridColumn: "span 4", height: "40px" }}
    className="C"
    >
    C
    </button>
    </div>
    );
}