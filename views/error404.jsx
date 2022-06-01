const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry, we can't find that page!</p>
                <div>
                    <img src="/images/404.jpg" alt="404 kitty"/>
                    <div>Photo from <a href="http.cat/404">HTTP Cats</a></div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404