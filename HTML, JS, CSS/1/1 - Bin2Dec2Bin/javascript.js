let opcao = "";

$(function () {
    $("button").click(function () {
        if (!isNaN(parseInt(document.getElementById('in').value, 10))) {


            switch (document.querySelector('[name="nc"]:checked').value) {
                case "b2d":
                    retorno = parseInt(document.getElementById('in').value, 2);
                    break;
                case "d2b":
                    retorno = (document.getElementById('in').value >>> 0).toString(2);
                    break;
                case "":
                    retorno = "escolha uma opção";
                    break;
                default:
                    break;
            }

        } else {
            retorno = "Verifique a entrada";

        }
        document.getElementById('out').value = retorno;
    });
});

function binordec(option) {
    if (option.value == "b2d") {
        opcao = "b2d";
    } if (option.value == "d2b") {
        opcao = "d2b";
    }
}