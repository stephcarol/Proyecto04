
let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora= document.getElementById('valorPorHora').value 
        let interfazHoras= document.getElementById('interfazHoras').value 
        
        let resultado = valorPorHora * interfazHoras

        document.getElementById('valorTotal').value = resultado 
        
    })


}

funcionPredeterminada();