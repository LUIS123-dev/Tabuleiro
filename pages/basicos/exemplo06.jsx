import Titulo from "../../components/Titulo2";

export default function init() {

    return (
        <>
            <Titulo
                principal="Pagina de Cadastro"
                descricao="pagina para gerenciar cadastro"
            />


            <Titulo principal="Outro Titulo"
                descricao="outra descricao"
                pequeno={true}
            />
        </>

    )

}