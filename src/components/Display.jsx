
export default function Display({ value }) {
    return (
        <input
            type="text"
            value={value}
            readOnly
            style={{
                width: "100%",
                height: "40px",
                fontSize: "20px",
                textAlign: "right",
                marginBottom: "10px",
                
            }}
            className="ipt"
        />
    );
}