var toBill = document.getElementsByClassName( 'toBill' )
//console.log( toBill )
var amt = document.getElementsByClassName( 'amt' )
var roomType = document.getElementsByClassName( 'roomType' )
for ( let index = 0; index < toBill.length; index++ ) {
    let book = toBill[ index ]
    book.addEventListener( 'click', () => {
        let money = amt[ index ].textContent.split( '/' )
        money = money[ 0 ]

        let room = roomType[ index ].textContent.trim()

        let details = {
            money: money,
            room: room
        }
        //console.log( details )

        localStorage.setItem( 'amount', JSON.stringify( details ) )
        location.href = 'billing.html'
    } )
}
