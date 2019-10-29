import React from 'react'
import MasterPage from '../components/MasterPage'
import Precio from '../components/Precio'
import Noticias from '../components/Noticias'
import Eventos from '../components/Eventos'

import fetch from 'isomorphic-unfetch'


const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio className="mb-4" precio={props.precioBitcoin} />
            </div>
            <div className="col-md-8">
                <h2>Noticias</h2>
                <Noticias className="mb-4" noticias={props.noticias} />
            </div>
            <div className="col-4">
                <h2>Precio del bitcoin</h2>
                <Eventos className="mb-4" eventos={props.eventos} />
            </div>
        </div>
    </MasterPage>
)

Index.getInitialProps = async () =>  {

    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')
    const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&language=es&apiKey=760a059fd8594f74ba8f9fc83259d9f4`)
    const eventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=VXPOJX4IGYMD52DP7UQQ`)

    const resPrecio = await precio.json()
    const resNoticias = await noticias.json()
    const resEventos = await eventos.json()

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticias.articles,
        eventos: resEventos.events
    }
}

export default Index
