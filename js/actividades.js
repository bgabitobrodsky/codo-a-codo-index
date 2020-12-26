var obj = [
{
	"type":3,
	"title":"MooTics",
	"desc":"Proyecto integrador propio sobre una página de encuestas",
	"tecs":["html","css","bt","php"],
	"url":"https://mootics.000webhostapp.com/",
	"blank":true
},
{
	"type":1,
	"title":"Act Obligatoria 11",
	"desc":"Nav con menú desplegable",
	"tecs":["html","css"],
	"url":"actividad-11/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 10",
	"desc":"Formulario con PHP",
	"tecs":["html","bt","php"],
	"url":"actividad-10/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 9",
	"desc":"Hola mundo con PHP",
	"tecs":["php"],
	"url":"actividad-9/",
	"blank":false
},
{
	"type":2,
	"title":"Actividad 22/10",
	"desc":"Precio de los boletos",
	"tecs":["js"],
	"url":"actividad-22oct/",
	"blank":true
},
{
	"type":1,
	"title":"Act Obligatoria 8",
	"desc":"Validación de un formulario con JS",
	"tecs":["js","html","bt"],
	"url":"actividad-8/",
	"blank":false
},
{
	"type":2,
	"title":"Actividad 8/10",
	"desc":"Ejercicios propuestos con JS",
	"tecs":["js","html","bt"],
	"url":"actividad-8oct/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 7",
	"desc":"Tablas de multiplicación con JS",
	"tecs":["html","css","js"],
	"url":"actividad-7/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 6",
	"desc":"Suma de variables en JS",
	"tecs":["html","css","js"],
	"url":"actividad-6/",
	"blank":false
},
{
	"type":3,
	"title":"Conf Bs As",
	"desc":"Proyecto en Bootstrap sobre una web de conferencias",
	"tecs":["html","css","bt"],
	"url":"conf-bsas/",
	"blank":true
},
{
	"type":1,
	"title":"Act Obligatoria 5",
	"desc":"Formulario con Bootstrap",
	"tecs":["html","css","bt"],
	"url":"actividad-5/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 4",
	"desc":"Tarjetas con Bootstrap",
	"tecs":["html","css", "bt"],
	"url":"actividad-4/",
	"blank":false
},
{
	"type":3,
	"title":"Bienes Raíces",
	"desc":"Proyecto integrador donde maquetamos una página de bienes raíces",
	"tecs":["html","css"],
	"url":"bienes-raices/",
	"blank":true
},
{
	"type":2,
	"title":"Actividad 17/09",
	"desc":"Desafío clonar Google",
	"tecs":["html","css"],
	"url":"actividad-17sep/",
	"blank":true
},
{
	"type":2,
	"title":"Actividad 15/09",
	"desc":"Desafío de iconos con FontAwesome",
	"tecs":["html","css"],
	"url":"actividad-15sep/",
	"blank":false
},
{
	"type":2,
	"title":"Actividad 10/09",
	"desc":"Desafíos con flexbox y position",
	"tecs":["html","css"],
	"url":"actividad-10sep/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 3",
	"desc":"Cajas rojas y negras",
	"tecs":["html","css"],
	"url":"actividad-3/",
	"blank":false
},
{
	"type":2,
	"title":"Actividad 03/09",
	"desc":"Actividad de la clase del 3 de septiembre",
	"tecs":["html","css"],
	"url":"actividad-3sep/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 2",
	"desc":"Pequeño formulario",
	"tecs":["html"],
	"url":"actividad-2/",
	"blank":false
},
{
	"type":1,
	"title":"Act Obligatoria 1",
	"desc":"Receta de cocina",
	"tecs":["html"],
	"url":"actividad-1/",
	"blank":false
}];

var contenedorDeActividades = document.getElementById('act');

imprimirActividades(0);

document.getElementById("filtro").addEventListener("change", function(e){
	imprimirActividades(this.value)
});


function imprimirActividades(filtro){
	reiniciarActividades();
	if(filtro == 0){
		obj.forEach(data => {
			contenedorDeActividades.appendChild(crearCard(data));
		})
	}else{
		obj.forEach(data => {
			if(data.type == filtro)
				contenedorDeActividades.appendChild(crearCard(data));
		})
	}
	
}

function reiniciarActividades(){
	contenedorDeActividades.innerHTML = "";
}

function crearCard(data){
	let contenedor = document.createElement('div');
	let tarjeta = document.createElement('div');
	var iconos = "";

	contenedor.className = "col-sm-6 col-lg-4 col-xl-3 actividad";
	
	switch (data.type) {
		case 1:
		contenedor.setAttribute('tipo-actividad','actividad');
		tarjeta.className = "tarjeta-box zocalo-rojo"
		break;
		case 2:
		contenedor.setAttribute('tipo-actividad','desafio');
		tarjeta.className = "tarjeta-box zocalo-azul"
		break;
		case 3:
		contenedor.setAttribute('tipo-actividad','proyecto');
		tarjeta.className = "tarjeta-box zocalo-violeta"
		break;
		default:
		contenedor.setAttribute('tipo-actividad','actividad');
		break;
	}

	if(data.tecs.includes('html')) 
		iconos += '<i class="fab fa-html5 html"></i>'
	if(data.tecs.includes('css')) 
		iconos += '<i class="fab fa-css3-alt css"></i>'
	if(data.tecs.includes('js')) 
		iconos += '<i class="fab fa-js-square js"></i>'
	if(data.tecs.includes('bt')) 
		iconos += '<i class="fab fa-bootstrap"></i>'
	if(data.tecs.includes('php'))
		iconos += '<i class="fab fa-php php"></i>'
	if(data.tecs.includes('sql'))
		iconos += '<i class="fas fa-database sql"></i>'

	tarjeta.innerHTML = '<div class="zocalo"></div><a href="' + data.url + '" class="tarjeta"' + (data.blank?'target="_blank"':'') + '><h4>' + data.title + '</h4><div class="tarjeta-desc">' + data.desc + '</div><div class="tarjeta-tags">' + iconos + '</div></a>';
	contenedor.appendChild(tarjeta);

	return contenedor;
}