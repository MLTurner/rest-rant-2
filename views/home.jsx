//import React and the Def function from default.jsx
const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/homepage_pic.jpg" alt="pic of three dishes"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a>
                     on <a href="https://unsplash.com/s/photos/dish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home