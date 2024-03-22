import FromContato from "../FromContato/FromContato"
import Habilidade from "../Habilidade/Habilidade"
import InfoPessoais from "../InfoPessoais/InfoPessoais"

function ConteudoPrincipal(){
    return(
        <>
        <InfoPessoais/>
        <Habilidade/>
        <FromContato/>
        </>
    )
}
export default ConteudoPrincipal