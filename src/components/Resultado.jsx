import styled from "@emotion/styled"


const Div = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 30px;

`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio =styled.p`
     font-size: 30px;
    span {
        font-weight: 700;
        font-size: 35px;
    }
`
const Imagen = styled.img`
    display: block;
    width: 70px;
    margin-top: 20px;
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE,} = resultado
  return (
    <Div>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de:<span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas<span>{CHANGEPCT24HOUR}</span></Texto>
            
            <Texto>Última actualización<span>{LASTUPDATE}</span></Texto>
        </div>
       
    </Div>
  )
}

export default Resultado