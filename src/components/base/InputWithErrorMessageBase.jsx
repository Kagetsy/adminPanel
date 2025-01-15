export default function InputWithErrorMessageBase({type, id, placeholder, handleChange, info}){
    return (
        <div className="input">
            <input type={type} id={id} placeholder={placeholder} required={true} onChange={handleChange} value={info.value}/>
            {info.error && <span className="error-message" id={`span_${id}`} >{info.error}</span>}
        </div>
    );
}