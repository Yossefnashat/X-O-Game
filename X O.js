// Score

    // get
    let score_btn = document.getElementById('score')
    let view = document.getElementById('view')
    let x_score = 0
    let o_score = 0

    // code

    view.style.display = 'none'

    function show_score() {
        if ( view.style.display == '' ) {
            view.style.display = 'none'
        }
        else if ( view.style.display == 'none' ) {
            view.style.display = ''
            set_score()
        }
    }
    function set_score() {
        view.innerHTML = ` X : ${x_score} | O : ${o_score} `
    }

// mode

    // get
    let h1 = document.querySelector('h1')
    let td = document.querySelectorAll('td')
    document.body.style.background = 'white'
    
    // code
    function set_mode(){
        if( document.body.style.background == 'white' ){

            document.body.style.background = 'black'
            h1.style.borderColor = 'gold'
            h1.style.color = 'blue'
            h1.style.background = 'black'
            for( i=0 ; i < td.length ; i++ ){

                td[i].style.border = ' solid 3px gold'
                td[i].style.color = 'white'
                td[i].style.background = 'black'
                
            }

        }
        else if(document.body.style.background == 'black' ){

            document.body.style.background = 'white'
            h1.style.borderColor = 'black'
            h1.style.color = 'black'
            h1.style.background = 'white'
            for( i=0 ; i < td.length ; i++ ){

                td[i].style.border = ' solid 3px black'
                td[i].style.color = 'black'
                td[i].style.background = 'white'

            }

        }
    }

// turn

    // get
    let turn = 'X'
    let item

    // start

    setTimeout( function () {
        h1.innerHTML = 'X'
    } , 1000 )

    // code
    function set_turn( id ) {

        item = document.getElementById(id)

        if ( turn == 'X' && item.innerText == '' ) {

            item.innerText = 'X'  
            check()

        }

        else if ( turn == 'O' && item.innerText == '' ) {

            item.innerText = 'O' 
            check()  

        }

    }

// Check

    // get
    let items = document.querySelectorAll('td')

    // code

    function check() {
        
        if ( items[0].innerText == turn && items[1].innerText == turn &&  items[2].innerText == turn  ) {
            winner( 0 , 1 , 2 )
        }
        else if ( items[3].innerText == turn && items[4].innerText == turn &&  items[5].innerText == turn  ) {
            winner( 3 , 4 , 5 )
        }
        else if ( items[6].innerText == turn && items[7].innerText == turn &&  items[8].innerText == turn  ) {
            winner( 6 , 7 , 8 )
        }
        else if ( items[0].innerText == turn && items[3].innerText == turn &&  items[6].innerText == turn  ) {
            winner( 0 , 3 , 6 )
        }
        else if ( items[1].innerText == turn && items[4].innerText == turn &&  items[7].innerText == turn  ) {
            winner( 1 , 4 , 7 )
        }
        else if ( items[2].innerText == turn && items[5].innerText == turn &&  items[8].innerText == turn  ) {
            winner( 2 , 5 , 8 )
        }
        else if ( items[0].innerText == turn && items[4].innerText == turn &&  items[8].innerText == turn  ) {
            winner( 0 , 4 , 8 )
        }
        else if ( items[2].innerText == turn && items[4].innerText == turn &&  items[6].innerText == turn  ) {
            winner( 2 , 4 , 6 )
        }
        else if (turn == 'O' ) {
            turn = 'X'
            h1.innerHTML = 'X'
            draw()
        }
        else if (turn == 'X' ) {
            turn = 'O'
            h1.innerHTML = 'O'
            draw()
        }

    }

    // winner
    function winner( num1 , num2 , num3  ) {
        items[num1].style.background = 'green'
        items[num2].style.background = 'green'
        items[num3].style.background = 'green'
        h1.innerHTML = ` ${turn} Win `
        h1.style.background = 'green'
        if ( turn == 'X' ) {
            x_score += 1
            set_score()
        }
        else if ( turn == 'O' ) {
            o_score += 1
            set_score()
        }
        setTimeout(
            function () {
                reload()
            }
        , 1000 )
    }

    // draw        

        function draw() {

            if ( items[0].innerText != '' && items[1].innerText != '' && items[2].innerText != '' && items[3].innerText != '' && items[4].innerText != '' && items[5].innerText != '' && items[6].innerText != '' && items[7].innerText != '' && items[8].innerText != ''  ) {
                h1.innerHTML = 'Draw'
                h1.style.background = 'yellow'
            }

            setTimeout(
                function () {
                    if ( items[0].innerText != '' && items[1].innerText != '' && items[2].innerText != '' && items[3].innerText != '' && items[4].innerText != '' && items[5].innerText != '' && items[6].innerText != '' && items[7].innerText != '' && items[8].innerText != ''  ) {
                        reload()
                    }
                }
            , 5000 )
                    
        }

// reload
function reload() {

    if ( document.body.style.background == 'white'  ) {
        for ( i = 0 ; i < items.length ; i++ ){
            items[i].innerText = ''
            items[i].style.background = 'white'
        }
        h1.innerHTML = ' X O Game '
        h1.style.background = 'none'
    }

    else if ( document.body.style.background == 'black' ) {
        for ( i = 0 ; i < items.length ; i++ ){
            items[i].innerText = ''
            items[i].style.background = 'black '
        }
        h1.innerHTML = ' X O Game '
        h1.style.background = 'none' 
    }
    
}

