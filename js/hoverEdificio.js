$(document).on("ready",inicio);
var anterior=null;
function inicio(){
	$(".edificio li").on("click", toogle);
}
function toogle (dato) {
	/*VErificar atravez de la varaible global anterior si ya hay una seleccionada*/
	if(anterior!=null){
		anterior.css("backgroundColor","#25bffb");
	}
	/*Aplicar estilo a la ventana clicleada*/
	$(this).css("backgroundColor","#0096FF");
	$(".pop-up").css("display", "block");
	var id = $(this).attr("id");
	console.log(id);
	$(".pop-up").html(informacion[id]);
	/*Asignar objeto actual a anterior */
	anterior=$(this);
}
function mostrarDescripcion(){
	console.log("adentro");
}
function ocultarDescripcion(){
	console.log("afuera");
}
var informacion = {
	"1-1":"<h2>Oficina 1-1</h2><h3>Richi ricon S.A.S</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum, magni numquam doloribus totam cupiditate ex fugiat doloremque necessitatibus facere similique aliquam perspiciatis, rerum. Explicabo inventore optio, autem. Iusto, aliquam.</p>",
	"1-2":"<h2>Oficina 1-2</h2><h3>Futurama S.A.S</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum, magni numquam doloribus totam cupiditate ex fugiat doloremque necessitatibus facere similique aliquam perspiciatis, rerum. Explicabo inventore optio, autem. Iusto, aliquam.</p>",
	"1-3":"<h2>Oficina 1-2</h2><h3>Salpicon S.A.S</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum, magni numquam doloribus totam cupiditate ex fugiat doloremque necessitatibus facere similique aliquam perspiciatis, rerum. Explicabo inventore optio, autem. Iusto, aliquam.</p>",
	"1-4":"<h2>Oficina 1-2</h2><h3>Familia nule S.A.S</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum, magni numquam doloribus totam cupiditate ex fugiat doloremque necessitatibus facere similique aliquam perspiciatis, rerum. Explicabo inventore optio, autem. Iusto, aliquam.</p>"
}
