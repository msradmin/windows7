<img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/banner.png">
<hr>
<p align="center">
<a href="https://github.com/belowaverage-org/webdows/wiki"><img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/docs.png"></a>
<a href="http://msradmin.github.io/windows7/"><img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/demo.png"></a>
<a href="https://belowaverage.org/"><img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/website.png"></a>
</p>
<hr>
<h2 align="center">Windows 7 Web Demo is a dynamic window API for the web browser designed to simulate the feel of Microsoft Windows 7 RTM</h2>
<hr>
<h1>Features</h1>

* Feito com simples API

* Well documented (Before first release)

* Suportado no Edge, Chrome, Safari, Firefox, and Opera.

* 99% de vetor CSS. *Bitmaps raramente usado para estilo*

* Temas customizáveis

* Estilo totalmente igual ao estilo Windows Aero

<h1>API Simples</h1>
<h3>Criando uma janela</h3>

```javascript
new explorer.window()
.title('Hello World')
.resize(200, 200)
.callback(function() {
    this.body.html('Test 123');
});
```

<img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/simpleapi1.PNG">

<h3>Criando um menu de contexto</h3>
  
```javascript
new explorer.context()
.append([
    {
       title: 'Hello'
    }, {}, {
       title: 'World',
       callback: function() { console.log('World Clicked'); }
    }
]);
```
<img src="https://raw.githubusercontent.com/krisdb2009/webdows-docs/master/images/context.png">
