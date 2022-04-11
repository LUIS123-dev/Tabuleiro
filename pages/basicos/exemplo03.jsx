export default function inicio (){
    const subtitulo = "Estou no subtitulo"
    const conteudo = (
        <div> 
            <h1> Ola mundo JSX</h1>
            <h2> {subtitulo} </h2>
            <h2> 3+3 </h2>
            <h2>{3+3} </h2>
            <h2> {maiorIdade(20)}</h2>
            <h2>resposta</h2>
        </div>

    )
    return conteudo;
}

function maiorIdade(idade){
    if(idade >= 18){
       return `Vocé ${idade} maior de idade`
    }else{
        return "Vocé menor de idade"

    }
}