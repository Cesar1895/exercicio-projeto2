const form = document.getElementById('formContatos');

let linhas = ' ';
const nomeContato = [];
const numeroContato = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputnomeContato = document.getElementById('nomeContato');
    const inputnumeroContato = document.getElementById('numeroContato');

    if(nomeContato.includes(inputnomeContato.value)){
        alert(`O nome ${inputnomeContato.value} já existe`);
    } else{
        nomeContato.push(inputnomeContato.value);
        numeroContato.push(parseFloat(inputnumeroContato.value));

        let linha = '<tr>';
        linha += `<td> ${inputnomeContato.value} </td>`;
        linha += `<td> ${inputnumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputnomeContato.value = '';
    inputnumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}