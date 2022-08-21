/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
File: webdows/system32/webldr.js
*/
(function() {
	$('#bootlog').append('<pre>Checking registry...</pre>');
	function files() {
		$('#bootlog').append('<pre>carregado!<br>---------------------------</pre>');
		$.getJSON('webdows/config/wfs.json', function(files) {
			system.files = files;
			$('#bootlog').append('<pre>Carregando e verificando SYSTEM.FILES.WEBDOWS...</pre>');
			system.bootLoader = {
				loadList: [],
				total: 0,
				current: 0,
				loaded: false
			};
			system.loader('webdows/system32/loadscrn.js');
			function list(obj, path) {
				$.each(obj, function(k) {
					var obj = this;
					var skip = false;
					$.each(system.registry.get('HKEY_LOCAL_WEBDOWS/system/webldr/exclude'), function() {
						if(this == path+obj || this == path) {
							skip = true;
							return true;
						}
					});
					if(skip) {
						return true;
					}
					if(typeof obj.valueOf() == 'string') {
						system.bootLoader.loadList[system.bootLoader.total++] = path+obj;
					} else if(typeof obj.valueOf() == 'object') {
						list(obj.valueOf(), path+k+'/');
					}
				});
			}
			list(system.files, '');
			function wfsLoad(list, i) {
				if(typeof list[i] == 'string') {
					$('#bootlog').append('<pre>'+list[i]+'...</pre> ');
					$(document).scrollTop($(document).height());
					var loadint = setInterval(function() {
						$('#bootlog pre').last().append('.');
						$(document).scrollTop($(document).height());
					}, 100);
					$.ajax({
						dataType: "text",
						async: true,
						cache: true,
						url: list[i],
						success: function() {
							clearInterval(loadint);
							$('#bootlog pre').last().append('GOOD');
							$(document).scrollTop($(document).height());
							system.bootLoader.current++;
							wfsLoad(list, i + 1);
						},
						error: function(jq) {
							clearInterval(loadint);
							system.error('WEBLDR.JS Cannot find the file specified: '+jq.status, list[i]);
						}
					});
				} else {
					$('#bootlog').append('<pre>Carregamento concluído... Registrando serviços...</pre>');
					$.each(system.registry.get('HKEY_LOCAL_WEBDOWS/system/services'), function(k) {
						var service = new system.service()
						.path(this.path)
						.interval(parseInt(this.interval))
						.autoStart((this.autoStart == 'true'))
						.id(k);
						$('#bootlog').append('<pre>'+k+': Serviço registrado...</pre>');
						if(this.autoStart == 'true') {
							service.run(true);
							$('#bootlog').append('<pre>'+k+': Serviço iniciado...</pre>');
						}
					});
					system.bootLoader.loaded = true;
					return;
				}
			}
			wfsLoad(system.bootLoader.loadList, 0);
			var timer = setInterval(function() {
				if(system.bootLoader.loaded) {
					$('body').html('');
					clearInterval(timer);
					$.each(system.registry.get('HKEY_LOCAL_WEBDOWS/system/startup'), function() {
						system.legacyLoader(this);
					});
				}
			}, 100);
		});
	}
	if(typeof system.registry.get('HKEY_LOCAL_WEBDOWS') == 'undefined') {
		$('#bootlog').append('<pre>Falta um registro! Instalando o novo registro...</pre>');
		$.ajax({
			url: 'webdows/config/registry.json',
			dataType: 'json',
			async: true,
			success: function(data) {
				$('#bootlog').append('<pre>Instalação concluída!, aplicando o novo registro...</pre>');
				system.registry.set('HKEY_LOCAL_WEBDOWS', data);
				files();
			}
		});
	} else {
		files();
	}
})();
