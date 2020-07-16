var login = document.getElementById( 'login' )

login.addEventListener( 'click', () => {
    event.preventDefault()
    const name = document.getElementById( 'username' ).value
    const password = document.getElementById( 'exampleInputPassword1' ).value
    let userInfo = {}
    userInfo.username = name
    userInfo.password = password

    let registeredUsers = localStorage.getItem( 'registeredUsers' )
    registeredUsers = JSON.parse( registeredUsers )
    //console.log( userInfo, registeredUsers )

    //=========== Admin Login ==============

    if ( name == 'akki' && password == 'chandu' ) {
        location.href = 'admin.html'
    }
    else {
        let index = 0;
        while ( index < registeredUsers.length ) {
            if ( name == registeredUsers[ index ].Username && password == registeredUsers[ index ].Password ) {
                location.href = 'rooms.html'
                break
            }
            alert( 'Incorrect username or password' )
            index++
        }
    }
} )
