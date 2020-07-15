var toBill = document.getElementsByClassName( 'toBill' )
console.log( toBill )
var amt = document.getElementsByClassName( 'amt' )
for ( let index = 0; index < toBill.length; index++ ) {
    let book = toBill[ index ]
    book.addEventListener( 'click', () => {
        let money = amt[ index ].textContent.split( '/' )
        money = money[ 0 ]

        localStorage.setItem( 'amount', JSON.stringify( money ) )
        //console.log( typeof money )
        location.href = 'billing.html'
    } )
}
