import React from 'react'

const Noticia = (props) => {
    const {urlToImage, url, title, description, source} = props.noticia

    let image = <img src='https://img.icons8.com/carbon-copy/100/000000/image.png' alt='Imagen no encontrada' className="card-img-top" />
    if(urlToImage !== '')
        image = <img src={urlToImage} alt={title} className="card-img-top" />

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">{image}</div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text font-weight-bold">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-success d-block">Leer más +</a>
                </div>
            </div>
        </div>
    )
}

export default Noticia
