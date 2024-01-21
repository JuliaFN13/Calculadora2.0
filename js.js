function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
}

function clean() {
    document.querySelector('.tela').innerHTML = "";
}

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length - 1)
}

function igual() {
    let tela = document.querySelector('.tela').innerHTML;

    if (tela) {
        document.querySelector('.tela').innerHTML = eval(tela);
    }

}

function raiz() {
    let tela = document.querySelector('.tela').innerHTML;

    if (tela) {
        document.querySelector('.tela').innerHTML = Math.sqrt(tela);
    }
}

function tan() {
    let tela = document.querySelector('.tela').innerHTML;

    if (tela) {
        document.querySelector('.tela').innerHTML = Math.tan(tela);
    }
}

function cos() {
    let tela = document.querySelector('.tela').innerHTML;

    if (tela) {
        document.querySelector('.tela').innerHTML = Math.cos(tela);
    }
}

function sen() {
    let tela = document.querySelector('.tela').innerHTML;

    if (tela) {
        document.querySelector('.tela').innerHTML = Math.sin(tela);
    }
}

function calcularQuadrado() {
    let telaElemento = document.querySelector('.tela');
    let telaValor = telaElemento.innerHTML;

    if (telaValor !== '') {
        let resultado = Math.pow(parseFloat(telaValor), 2);
        telaElemento.innerHTML = resultado;
    }

    }

