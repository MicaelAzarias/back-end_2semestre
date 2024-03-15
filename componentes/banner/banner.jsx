import './banner.css'

function Banner(props){
    return(
        <header>
            <div>
                <h1 className="titulo-banner">{props.textoBanner}</h1>
                <p>Paragrafo do meu banner</p>
            </div>
        </header>
    )
}

export default Banner