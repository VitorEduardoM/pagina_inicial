const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value= formatString(event.target.value);

    const items = document.querySelectorAll('.card');

    const notresul = document.getElementById('nao_acho');


    let hasresult = false;
//------------------------------------------------------------------------------------------------- 

//-----------------------------------------------------------------------------------------------------
    items.forEach(card  =>{

        if(formatString(card.textContent).indexOf(value) != -1){

            card.style.display= 'flex';
            hasresult = true;
            
        }else{

            card.style.display= 'none';

        }
    })
//-----------------------------------------------------------------------------------------------------
    if (hasresult) {
        notresul.style.display = 'none'
    }else{
        notresul.style.display = 'block'
    }

})

//função feita para padronizar o texto
function formatString(value){
    return value
        //converte todas as letras de uma string para a forma minuscula 
        .toLowerCase()
        //remove todos os caracteres de espaço branco
        .trim();
}
