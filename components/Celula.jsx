import styless from "../styless/Celula.module.css"

export default function Celula(props){

    return(
        <div
        style ={{backgroundColar:props.preto ? "black" : "white"}}
        className = {styless.Celula}></div>
        )
}