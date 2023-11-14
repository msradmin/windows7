new explorer.window()
    .title('Google Chrome')
    .resize(800, 600)
    .callback(function () {
        // Cria contêiner para abas
        var tabContainer = document.createElement('div');
        tabContainer.id = 'tabs';
        this.content.appendChild(tabContainer); // Adaptação: usa this.content em vez de this.body

        // Cria contêiner para conteúdo das abas
        var contentContainer = document.createElement('div');
        contentContainer.id = 'content';
        contentContainer.style.height = 'calc(100% - 60px)'; // Ajusta a altura para deixar espaço para as abas e a barra de endereços
        this.content.appendChild(contentContainer); // Adaptação: usa this.content em vez de this.body

        // Cria contêiner para a barra de endereços
        var addressBarContainer = document.createElement('div');
        addressBarContainer.id = 'address-bar';
        this.content.appendChild(addressBarContainer); // Adaptação: usa this.content em vez de this.body

        // Restante do código permanece inalterado
        // ...

    });
