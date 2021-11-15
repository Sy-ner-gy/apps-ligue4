
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


$(document).ready(
	function(){
		
		btnNovoJogo()
	}
)
