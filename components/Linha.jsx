import Celula from "./Celula"
import styless from "../styless/Linha.module.css"

export default function Linha (props){
    return(
        <div className={styless.Linha}>
            <Celula preto = {props.preto} />
            <Celula preto = {!props.preto} />
            <Celula preto = {props.preto} />
            <Celula preto = {!props.preto} />
            <Celula preto = {props.preto} />
            <Celula preto = {!props.preto} />
            <Celula preto = {props.preto} />
            <Celula preto = {!props.preto} />
        </div>
    )
}