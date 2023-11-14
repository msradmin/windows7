new explorer.window()
    .title('Google Chrome')
    .resize(800, 600)
    .callback(function() {
        // Cria um iframe para exibir o conteúdo da página da web com o parâmetro igu=1
        var iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.src = 'https://www.google.com?igu=1'; // URL com o parâmetro igu=1

        // Adiciona o iframe ao corpo da janela
        this.body.appendChild(iframe);
    });

