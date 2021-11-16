function scrollS() {

	scrollTo(0,$S("main")[0].offsetTop);
}

$(document).ready (

	function () {

	$('#modal_partidas').modal('show');

	scrollS();

	}

)

/*function scrollS(){scrollTo(0,$S("main")[0].offsetTop);}
function btnNovoJogo() {

	$('#preambulo_1a').modal('show');
	scrollS()
	btnCarregarjogo()

}

function btnCarregarjogo() {

	$S('#fechar').onS('click',function () {

		$('#preambulo_modos').modal('show');
		scrollS()


	})

}
function open(params) {
	$('#preambulo_modos').modal('hide');
	switch (params) {
		case "Novo jogo":
			$('#preambulo_2b').modal('show');
			break;

		default:
			break;
	}
}
function toogle(el){
	let value=""
	if(el.dataset.info=="Novo jogo"){
		value =el.dataset.info="Carregar jogo"
	}else{
		value =el.dataset.info="Novo jogo"
	}
	return value
}

$(document).ready(
	function(){

		btnNovoJogo()
		$S("#escolhe").onS("click",function(){
			console.log("!")
			open(this.value)
			this.value= toogle(this)
		})
		$S("#fechar3").onS("click", function() {
			$S("#modal_Pvl").modal('show');
		})
	}
)*/
