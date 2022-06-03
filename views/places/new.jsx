//Require react and link Def component
const React = require('react')
const Def = require('../default')

//Function to allow user to fill out a form for a new place
function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* Remember, forms have two crucial attributes: 
                method (the HTTP verb) and action (the destination path). 
                In our case, we want the form data to go to the POST /places route. */}
                <form method='POST' action='/places'>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control' type='url' id='pic' name='pic' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id='state' name='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input  className='form-control' id='cuisines' name='cuisines' required />
                    </div>
                        <input className='btn btn-primary' type='submit' value='Add Place'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
