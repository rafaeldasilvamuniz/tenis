$(document).ready(function(){

    const nom = [];
    
    let linhas = '';
    
    $('#form-atividade').on('submit', function(e){
        e.preventDefault();
        adicionaLinha();
        atualizaTabela();
         })
    
       
    function adicionaLinha() {    
         // const inputNome = $('#nome').val();
          const tenis1 = $('#tn1').val();
          const tenis2 = $('#tn2').val();
          const tenis3 = $('#tn3').val();
          const tenis4 = $('#tn4').val();
    
        let linha1,linha2,linha3,linha4 = '<tr>';
        linha1  += `<th><ul><li style="display:flex-wrap">${tenis1}</li></ul></th>`;
        linha2  += `<th><ul><li style="display:flex-wrap">${tenis2}</li></ul></th>`;
        linha3  += `<th><ul><li style="display:flex-wrap">${tenis3}</li></ul></th>`;
        linha4  += `<th><ul><li style="display:flex-wrap">${tenis4}</li></ul></th>`;
    
        
        linha1 += '</tr>';
        linha2 += '</tr>';
        linha3 += '</tr>';
        linha4 += '</tr>';
    
        linhas += linha1,linha2,linha3,linha4;
    
        
    }
    
    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    
    }
    
})
    
    