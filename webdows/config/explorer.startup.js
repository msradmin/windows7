$('head').find('title').text('Windows 7');
explorer.start.append([], [
	{
		title: 'Windows',
		icon: 'webdows/resources/icons/ques.ico',
		callback: function() { system.loader('webdows/webver.js'); }
	}, {
		title: 'Painel de Controle',
		icon: 'webdows/resources/icons/cont.ico'
	}, {
		title: 'Internet Explorer',
		icon: 'webdows/resources/icons/scre.ico',
		callback: function() { explorer.file_explorer(); },
		context: [
			{
				title: '<b>Abrir</b>',
				icon: 'webdows/resources/icons/driv.ico',
				callback: function() { explorer.file_explorer(); }
			}, {}, {
				title: 'Propriedades',
				callback: function() { system.loader('webdows/system.js'); }
			}
		]
	}, {
		title: 'Personalizar',
		icon: 'webdows/resources/icons/pers.ico',
		callback: function() { system.loader('webdows/personalize.js'); }
	}, {
		title: 'Sobre o Windows',
		icon: 'webdows/resources/icons/logo.png',
		callback: function() { system.loader('webdows/welcome.js'); }
	}, {
		title: 'Reiniciar',
		callback: function() { location.reload(true); }
	}
]);
$('#desktop.explorer').on('contextmenu', function(e) {
	e.preventDefault();
	if(e.target == this) {
		new explorer.context()
		.location(e.pageX, e.pageY)
		.append([
			{
				title: 'Exibir'
			}, {
				title: 'Agrupar por'
			}, {
				title: 'Atualizar'
			}, {}, {
				title: 'Nova',
				context: [
					{
						title: 'Arquivo',
						callback: function() {}
					}, {}, {
						title: 'Pasta',
						callback: function() {}
					}
				]
			}, {}, {
				title: 'Sobre o Windows',
				icon: 'webdows/resources/icons/info.ico',
				callback: function() { system.loader('webdows/webver.js'); }
			}, {
				title: 'Personalização',
				icon: 'webdows/resources/icons/pers.ico',
				callback: function() { system.loader('webdows/personalize.js'); }
			}
		]);
	}
});
