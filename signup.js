
var register = document.getElementById( 'register' )

register.addEventListener( 'click', () => {
    event.preventDefault()
    let registeredUsers = localStorage.getItem( 'registeredUsers' )
    registeredUsers = JSON.parse( registeredUsers ) || []
    var registerDetails = {}
    const registerForm = document.forms[ 'register' ]
    const registrationArray = [ 'Name', 'Email', 'Username', 'Password' ]

    for ( let index = 0; index < registrationArray.length; index++ ) {
        registerDetails[ registrationArray[ index ] ] = registerForm.elements[ index ].value
    }
    registeredUsers.push( registerDetails )
    localStorage.setItem( 'registeredUsers', JSON.stringify( registeredUsers ) )
    console.log( registeredUsers, registerDetails )

    localStorage.setItem( 'users', JSON.stringify( registerDetails ) )
    const modalText = document.querySelector( '.modalText' )
    modalText.innerHTML = `Successfully registered ${ registerDetails.Name }
    You can sign in now`

    const signIn = document.querySelector( '.signIn' )
    signIn.addEventListener( 'click', () => {
        location.href = 'signin.html'
    } )
} )