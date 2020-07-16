

random = () => {
    return Math.floor( Math.random() * 255 )
}

randomColor = () => {
    return `rgb(${ random() },${ random() },${ random() })`
}

userDetails = () => {
    var registeredUsers = localStorage.getItem( 'registeredUsers' )
    registeredUsers = JSON.parse( registeredUsers )

    let userInfo = document.getElementById( 'userInfo' )

    console.log( registeredUsers )

    let table = document.createElement( 'table' )
    table.setAttribute( 'class', 'my-5' )
    table.style.marginLeft = '10%'
    let trh = document.createElement( 'tr' )
    trh.style.backgroundColor = 'teal'

    let th1 = document.createElement( 'th' )
    th1.setAttribute( 'class', 'px-5 py-3' )
    th1.textContent = 'S. No.'
    let th2 = document.createElement( 'th' )
    th2.setAttribute( 'class', 'px-5 py-3' )
    th2.textContent = 'Name'
    let th3 = document.createElement( 'th' )
    th3.setAttribute( 'class', 'px-5 py-3' )
    th3.textContent = 'Email'
    let th4 = document.createElement( 'th' )
    th4.setAttribute( 'class', 'px-5 py-3' )
    th4.textContent = 'Username'

    trh.append( th1, th2, th3, th4 )
    table.appendChild( trh )

    for ( let index = 0; index < registeredUsers.length; index++ ) {
        let tr = document.createElement( 'tr' )
        let td1 = document.createElement( 'td' )
        td1.setAttribute( 'class', 'px-5 py-2' )
        td1.textContent = index + 1
        let td2 = document.createElement( 'td' )
        td2.setAttribute( 'class', 'px-5 py-2' )
        td2.textContent = registeredUsers[ index ].Name
        let td3 = document.createElement( 'td' )
        td3.setAttribute( 'class', 'px-5 py-2' )
        td3.textContent = registeredUsers[ index ].Email
        let td4 = document.createElement( 'td' )
        td4.setAttribute( 'class', 'px-5 py-2' )
        td4.textContent = registeredUsers[ index ].Username
        tr.style.backgroundColor = randomColor()
        tr.append( td1, td2, td3, td4 )
        table.appendChild( tr )

    }

    userInfo.append( table )
}

userDetails()

booking = () => {
    var bookingDetails = document.getElementById( 'bookingDetails' )

}

booking()



