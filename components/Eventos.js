import React from 'react'
import Evento from './Evento'

const Eventos = (props) => {
    const eventosID = Object.keys(props.eventos)

    return (
        <div className="list-group">
            {eventosID.map(key => (
                <Evento key={key} info={props.eventos[key]} />
            ))}
        </div>
    )
}

export default Eventos
