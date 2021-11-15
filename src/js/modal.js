
function scrollS(){scrollTo(0,$S("main")[0].offsetTop);}
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
			this.value= toogle(this)
			console.log("!")
		})
	}
)
