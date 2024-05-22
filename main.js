const form = document.getElementById('form-agenda'); 
const imgFoto = '<img src="./imagens/agenda.png" alt="Foto Contato" />'; 

const contatos = []; 
const numeros = []; 

let linhas = ''; 

form.addEventListener('submit', function(e) { 
    e.preventDefault(); 

    adicionaLinha(); 
    atualizaTabela(); 
});          

function adicionaLinha() { 
    const inputNome = document.getElementById('nome-cont');     
    const inputNumber = document.getElementById('numero-cont');   

    
    if (numeros.includes(inputNumber.value)) {
    alert (`O número ${inputNumber.value} já foi inserido`); 
    }else { 
    
    contatos.push(inputNome.value);
    numeros.push(inputNumber.value); 

    let linha = '<tr>';               
    linha += `<td>${inputNome.value}</td>`; 
    linha += `<td>${inputNumber.value}</td>`; 
    linha += `<td>${inputNumber.value = imgFoto }</td>`;    
    linha += `</tr>`;

    linhas += linha; }

    inputNome.value = '';
    inputNumber.value = '';
} 

function atualizaTabela() { 
const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas; 
}
