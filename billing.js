var details = localStorage.getItem( 'amount' )
details = JSON.parse( details )
money = Number( details.money )

let room = details.room

const pay = document.querySelector( '.pay' )
pay.addEventListener( 'click', () => {
    event.preventDefault()
    const billData = document.forms[ 'billData' ]
    const details = [ 'Name', 'Email', 'Mobile', 'ID Proof', 'ID Number', 'Days', 'Persons' ]
    //console.log( billData.elements.length )
    var billingInfo = {}

    for ( let index = 0; index < details.length; index++ ) {
        billingInfo[ details[ index ] ] = billData.elements[ index ].value
    }
    // console.log( billingInfo )

    let display = document.querySelector( '.display' )

    let table = document.createElement( 'table' )

    let tr1 = document.createElement( 'tr' )

    let r1td1 = document.createElement( 'td' )
    r1td1.setAttribute( 'class', 'sideHeads' )
    r1td1.textContent = 'Name:'

    let r1td2 = document.createElement( 'td' )
    r1td2.setAttribute( 'class', 'sideData' )
    r1td2.textContent = billingInfo.Name

    tr1.append( r1td1, r1td2 )

    let tr2 = document.createElement( 'tr' )

    let r2td1 = document.createElement( 'td' )
    r2td1.setAttribute( 'class', 'sideHeads' )
    r2td1.textContent = 'Mobile:'

    let r2td2 = document.createElement( 'td' )
    r2td2.setAttribute( 'class', 'sideData' )
    r2td2.textContent = billingInfo.Mobile

    tr2.append( r2td1, r2td2 )

    let tr3 = document.createElement( 'tr' )

    let r3td1 = document.createElement( 'td' )
    r3td1.setAttribute( 'class', 'sideHeads' )
    r3td1.textContent = 'ID Proof:'

    let r3td2 = document.createElement( 'td' )
    r3td2.setAttribute( 'class', 'sideData' )
    r3td2.textContent = `${ billingInfo[ 'ID Proof' ] } - ${ billingInfo[ 'ID Number' ] }`

    tr3.append( r3td1, r3td2 )

    let tr4 = document.createElement( 'tr' )

    let r4td1 = document.createElement( 'td' )
    r4td1.setAttribute( 'class', 'sideHeads' )
    r4td1.textContent = 'Room Type:'

    let r4td2 = document.createElement( 'td' )
    r4td2.setAttribute( 'class', 'sideData' )
    r4td2.textContent = room

    tr4.append( r4td1, r4td2 )

    let tr5 = document.createElement( 'tr' )

    let r5td1 = document.createElement( 'td' )
    r5td1.setAttribute( 'class', 'sideHeads' )
    r5td1.textContent = 'No of Persons:'

    let r5td2 = document.createElement( 'td' )
    r5td2.setAttribute( 'class', 'sideData' )
    r5td2.textContent = billingInfo.Persons

    tr5.append( r5td1, r5td2 )

    let tr6 = document.createElement( 'tr' )

    let r6td1 = document.createElement( 'td' )
    r6td1.setAttribute( 'class', 'sideHeads' )
    r6td1.textContent = 'Days of stay:'

    let r6td2 = document.createElement( 'td' )
    r6td2.setAttribute( 'class', 'sideData' )
    r6td2.textContent = billingInfo.Days

    tr6.append( r6td1, r6td2 )

    let tr7 = document.createElement( 'tr' )

    let r7td1 = document.createElement( 'td' )
    r7td1.setAttribute( 'class', 'sideHeads' )
    r7td1.textContent = 'Sub Total:'

    let r7td2 = document.createElement( 'td' )
    r7td2.setAttribute( 'class', 'sideData' )
    r7td2.textContent = `Rs ${ money * Number( billingInfo.Days ) } /-`

    tr7.append( r7td1, r7td2 )

    let tr8 = document.createElement( 'tr' )

    let r8td1 = document.createElement( 'td' )
    r8td1.setAttribute( 'class', 'sideHeads' )
    r8td1.textContent = 'GST:'

    let r8td2 = document.createElement( 'td' )
    r8td2.setAttribute( 'class', 'sideData' )
    const gstAmt = ( 0.18 * money ).toFixed( 2 )
    r8td2.textContent = ` Rs ${ gstAmt } /-`

    tr8.append( r8td1, r8td2 )

    let tr9 = document.createElement( 'tr' )

    let r9td1 = document.createElement( 'td' )
    r9td1.setAttribute( 'class', 'sideHeads' )
    r9td1.textContent = 'Total:'

    let r9td2 = document.createElement( 'td' )
    r9td2.setAttribute( 'class', 'sideData' )
    r9td2.textContent = ` Rs ${ ( Number( gstAmt ) + money * Number( billingInfo.Days ) ) } /-`

    tr9.append( r9td1, r9td2 )

    let tr10 = document.createElement( 'tr' )

    let r10td1 = document.createElement( 'a' )
    r10td1.setAttribute( 'href', 'rooms.html' )
    r10td1.textContent = 'Click here to book more rooms'

    tr10.append( r10td1 )

    table.append( tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10 )
    //console.log( table )
    display.appendChild( table )

} )
