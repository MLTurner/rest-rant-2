const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                crossorigin='anonymous'/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
            <div className='content'>
                {html.children}
            </div>
            <footer className='footer'>
            <a href='#linkedin' className='fa-linkedin'></a>
            <i className='fa fa-linkedin'></i>
            <a href='#github' className='fa-github'></a>
            <i className='fa-brands fa-github-alt'></i>
            </footer>
            </body>
        </html>
    )
}

module.exports = Def