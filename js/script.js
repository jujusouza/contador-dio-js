const btnIncrementar$ = document.getElementById("btn-incremente");
const btnzerar$ = document.getElementById("btn-zerar");
const btnDecrementar$ = document.getElementById("btn-Decrementar");
const p$ = document.getElementById("contador");

let contador = 0;

p$.innerHTML = contador;

btnIncrementar$.addEventListener("click", function () {
    p$.innerHTML = ++contador;

    if (contador < 0) {
        p$.style.color = "red"
    } else {
        p$.style.color = "green"
    }
});

btnDecrementar$.addEventListener("click", function () {
    p$.innerHTML = --contador;

    if (contador < 0) {
        p$.style.color = "red"
    } else {
        p$.style.color = "green"
    }
});

btnzerar$.addEventListener("click", function () {
    p$.innerHTML = contador = 0;
});
