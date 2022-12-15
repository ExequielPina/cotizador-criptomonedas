import styled from "@emotion/styled"

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGENURL, LASTUPDATE} = resultado
  return (
    <div>
        <p>El precio es de: <span>{PRICE}</span></p>
        <p>El precio más alto del día: <span>{HIGHDAY}</span></p>
        <p>El precio más bajo del día <span>{LOWDAY}</span></p>
        <p>Variación últimas 24 horas<span>{CHANGEPCT24HOUR}</span></p>
        <p>El precio es de <span>{IMAGENURL}</span></p>
        <p>Última actualización<span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado