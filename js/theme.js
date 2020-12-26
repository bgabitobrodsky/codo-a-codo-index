var darkTheme;
var toggleTheme = document.getElementById('toggle-theme');

cargarTema();

toggleTheme.addEventListener('change', function(){
	if(darkTheme === "true"){
		localStorage.setItem('gbito-dark-theme', false);
		darkTheme = "false";
		body.classList.remove('tema-oscuro');
		$('meta[name=theme-color]').remove();
		$('head').append( '<meta name="theme-color" content="#fff">' );
	}else{
		localStorage.setItem('gbito-dark-theme', true);
		darkTheme = "true";
		body.classList.add('tema-oscuro');
		$('meta[name=theme-color]').remove();
		$('head').append( '<meta name="theme-color" content="#111">' );
	}
});

function cargarTema() {
	darkTheme = localStorage.getItem('gbito-dark-theme');
	if(darkTheme === null){
		darkTheme = "false";
	}
	if(darkTheme === "true"){
		body.classList.add('tema-oscuro');
		toggleTheme.checked = true;
		$('meta[name=theme-color]').remove();
		$('head').append( '<meta name="theme-color" content="#111">' );
	}
}