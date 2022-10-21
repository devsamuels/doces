function calculateHMSleft()
{
	var now = new Date();
	var hoursleft = 23-now.getHours();
	var minutesleft = 59-now.getMinutes();
	var secondsleft = 59-now.getSeconds();
	if(minutesleft<10) minutesleft = "0"+minutesleft;
	if(secondsleft<10) secondsleft = "0"+secondsleft;
	document.getElementById('count').innerHTML = hoursleft+":"+minutesleft+":"+secondsleft;
}
calculateHMSleft();
setInterval(calculateHMSleft, 1000);

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

function form_simples(ele){
	numero = ele.elements.length
	erro = "";
	for(i=0; i<numero; i++){
		if(ele.elements[i].alt == "yes"){
			if(ele.elements[i].name == "email" || ele.elements[i].name == "e-mail" || ele.elements[i].name == "mail"){
				if(ele.elements[i].value.indexOf('@')==-1 || ele.elements[i].value.indexOf('.')==-1){
				erro = erro + "Preencha o campo '"+ ele.elements[i].name.toUpperCase() +"' corretamente. \n"
				}
			}else{
				if(ele.elements[i].value==""){
				erro = erro + "Preencha o campo '"+ ele.elements[i].name.toUpperCase() +"'. \n"
				}
			}
		}
		if(ele.elements[i].title == "yes"){
			if(ele.elements[i].value==""){
			erro = erro + "Preencha o campo '"+ ele.elements[i].name.toUpperCase() +"'. \n"
			}
		}
	}

	if(erro != ""){
		alert("Erros:\n"+erro);
		if ("Erros:\n") {
			prompt("Digite seu email: ");
			alert("O e-mail foi digitado");
		}
;
		
		return false
	}else{
		return true
	}
}