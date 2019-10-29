import React from 'react'

const Evento = (props) => {

    const {name, url, description} = props.info
    
    let titulo = name.text
    titulo = (titulo.length > 100) ? titulo.substr(0, 100) + "..." : titulo
    
    let desc = description.text
    desc = (desc.length > 100) ? desc.substr(0, 100) + "..." : desc

    return (
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{desc}</p>
        </a>
    )
}

export default Evento



