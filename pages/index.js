import React from 'react'
import MasterPage from '../components/MasterPage'
import Precio from '../components/Precio'
import Noticias from '../components/Noticias'

import fetch from 'isomorphic-unfetch'


const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio precio={props.precioBitcoin} />
            </div>
            <div className="col-md-8">
                <h2>Noticias</h2>
                <Noticias noticias={props.noticias} />
            </div>
            <div className="col-4">
                <h2>Precio del bitcoin</h2>
            </div>
        </div>
    </MasterPage>
)

Index.getInitialProps = async () =>  {

    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')
    const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&language=es&apiKey=760a059fd8594f74ba8f9fc83259d9f4`)
    const eventos = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&language=es&apiKey=760a059fd8594f74ba8f9fc83259d9f4`)

    const resPrecio = await precio.json()
    const resNoticias = await noticias.json()

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticias.articles
    }
}

export default Index
