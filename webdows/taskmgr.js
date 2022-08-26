new explorer.window()
.title('Gerenciador de Tarefas')
.icon('webdows/resources/icons/task.ico')
.callback(function() {
	var b = this.body;
	var count = 0;
	setInterval(function() {
		b.html(count++);
	}, 100);
	console.log(script.path);
});
