const hiddenElements = document.querySelectorAll('.hidden')
const area_capa_logo = document.getElementById('capa_logo')

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        //console.log(entry)
        
        if (entry.isIntersecting) {

            entry.target.classList.add('show');
            
        }
        
        /* 
        else {

            entry.target.classList.remove('show')

        }
        */

    })

})

hiddenElements.forEach((el) => observer.observe(el))

function sorteiaFundoDegrade(){

    valorAleatorio = parseInt(Math.random() * 3)

    if (valorAleatorio === 0) {

        area_capa_logo.classList.add('degrade_azul')

    }

    if (valorAleatorio === 1) {

        area_capa_logo.classList.add('degrade_laranja')

    }

    if (valorAleatorio === 2) {

        area_capa_logo.classList.add('degrade_roxo')

    }

}

sorteiaFundoDegrade()

