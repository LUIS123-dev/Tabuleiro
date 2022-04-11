import styless from "../styless/Celula.module.css"

export default function Celula(props){

    return(
        <div
        style ={{backgroundColor:props.preto ? "black" : "white"}}
        className = {styless.Celula}></div>
        )
}