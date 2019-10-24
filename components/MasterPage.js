import Head from 'next/head'
import Navegacion from './Navegacion'


const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin News App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css" />
            <Navegacion />
            <div className="container mt-4">
                {props.children}
            </div>
        </Head>
    </div>
)

export default MasterPage