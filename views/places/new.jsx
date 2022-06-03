//Require react and link Def component
const React = require('react')
const Def = require('../default')

//Function to allow user to fill out a form for a new place
function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )
}

module.exports = new_form
