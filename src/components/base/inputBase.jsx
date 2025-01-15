export default function InputBase({type, id, placeholder, handleChange, info}){
    return (
        <div className="input">
            <input type={type} id={id} placeholder={placeholder} onChange={handleChange} value={info}/>
        </div>
    );
}