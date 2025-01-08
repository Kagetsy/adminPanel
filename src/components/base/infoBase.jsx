export default function InfoBase({className, idLabel, nameBlock, content}){
    return (
        <div>
            <p className={className}>{nameBlock}</p>
            <label className={className} id={idLabel}>{content}</label>
        </div>);
}