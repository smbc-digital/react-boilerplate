import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import * as prerendering from 'aspnet-prerendering'
import { Root } from './index'
import 'regenerator-runtime/runtime'


const serverRenderer = prerendering.createServerRenderer(params => {
    const App = () => {
        return(<StaticRouter location={params.url}>
            <Root/>
        </StaticRouter>)
    }
    return new Promise((resolve, reject) => {
        ReactDOMServer.renderToString(<App/>)

        params.domainTasks.then(() => {
            resolve({
                html: ReactDOMServer.renderToString(<App/>),
            })
        }, reject)
    })
})

export default serverRenderer
