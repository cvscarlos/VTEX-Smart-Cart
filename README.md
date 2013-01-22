#VTEX - Smart Cart
>*Extensões da plataforma VTEX são plugins criados por desenvolvedores de interface ou pelo VTEX Lab (Laboratório de Inovações da VTEX) que podem ser inseridas em sua loja. Existem extensões gratuitas com código aberto -  Open Source - e extensões pagas.  Indicamos que a instalação seja realizada pelos profissionais e empresas certificados pela VTEX. Vale ressaltar que qualquer profissional de CSS, JavaScript e HTML pode também executar esta tarefa.*

----------

Veja este componente na [VTEX Store](http://conversionstore.com.br/index.php/parceiros/extensoes/adicionar-ao-carrinho-avancado)

##Instalação
1. Faça o upload para o "Gerenciador do portal" no "Vtex Admin" dos seguintes arquivos:
* img/vtexsc-bgbody.jpg
* img/ajax-loader.gif
* vtex-smartCart.min.js
* vtex-smartCart.css

2. Faça a chamada do arquivo javascript e CSS na página:
```html
<link rel="stylesheet" type="text/css" href="/arquivos/vtex-smartCart.css" />
<script type="text/javascript" src="/arquivos/vtex-smartCart.min.js"></script>
```

3. Adicione o HTML da barra flutuante (recomendação: adione no subtemplate de header):
```html
<!-- sugestão de código. Os controles são opcionais, apenas é obrigatório ter a ".floatingTopBar" -->
<div class="floatingTopBar header" style="display:none;">
    <div class="floatingTopBarWrap">
    	<a href="/" title="Loja Modelo" class="_logo">Loja Modelo</a>
		<div class="search">
			<vtex.cmc:fullTextSearchBox/>
		</div>
        <div class="_cart vtexsc-showCart">
            <a href="/Site/Carrinho.aspx" title="Concluir Compra" rel="nofollow">Meu carrinho</a>
		    <vtex.cmc:AmountItemsInCart />
        </div>   
	</div>
</div>
<!--
Script que exibe a barra flutuante.
Ele pode ser executado em outo local, esta aqui apenas como sugestão.
-->
<script type="text/javascript">
	// <![CDATA[
	$(function(){
		// Barra flutuante conforme scroll
		var floatingBar=$(".floatingTopBar");
		var smartCart=$(".vtexsc-cart");
		$(window).bind("scroll",function(){
			if($(this).scrollTop()>140)
			{
				floatingBar.fadeTo(300,1);
				smartCart.not(".floatingCart").show().css("left",smartCart.offset().left).hide();
				smartCart.addClass("floatingCart");
			}
			else
			{
				floatingBar.stop(true).fadeTo(200,0,function(){floatingBar.hide();});
				smartCart.filter(".floatingCart").css("left","auto");
				smartCart.removeClass("floatingCart");
			}
		}); 
	});
	// ]]>
</script>
```

4. Adicione o botão de compra assíncrona ao template de vitrine: `$product.BottomBuyAsynchronous`

5. Adicione a classe `vtexsc-showCart` ao elemento que esta em volta do carrinho atual.

6. Adicione o HTML da caixa em que os produtos do carrinho serão exibidos (recomendação: adione no subtemplate de header):
```html
<div class="vtexsc-cart">
	<div class="vtexsc-bt"></div>
	<div class="vtexsc-center">
		<div class="vtexsc-arrowTop"></div>
		<div class="vtexsc-wrap"><table class="vtexsc-productList"></table></div>
		<div class="vtexsc-arrowBottom"></div>
		<div class="cartFooter clearfix">
			<div class="cartTotal">Total <span class="vtexsc-totalCart"></span></div>
			<a href="/Site/Endereco.aspx?FinalizaCompra=1" class="cartCheckout"></a>
			<a href="/Site/Carrinho.aspx" class="viewCart"></a>
		</div>
	</div>
	<div class="vtexsc-bb"></div>
</div>
```

7. Execute o plugin. Como seletor use o botão de compra assíncrona:
```javascript
// PÁGINAS DE VITRINE
$(".btn-add-buy-button-asynchronous").smartCart();
// Adicione um overlay para ser exibido quando o usuário clicar no botão
$(".btn-add-buy-button-asynchronous").after('<div class="vtexsc-buttonOverlay"></div>');
```


###Avançado

Configurações completas do plugin (lista atualizada em 13/11/2012):
```javascript
$(".btn-add-buy-button-asynchronous").smartCart({
	method:1,
	htmlFormat:2, // 1 = UL, 2 = Tabela (Modo de lista não esta completo)
	skuThumbId:3, // Id da miniatura a ser exibida no popup de seleção do SKU
	cartElem:".vtexsc-cart", // Elemento que mostra os itens existentes no carrinho
	listElem:".vtexsc-productList", // Elemento onde os produtos serão listados
	scrollTop:".vtexsc-arrowTop", // Elemento p/ rolar a lista p/ cima
	scrollDown:".vtexsc-arrowBottom", // Elemento p/ rolar a lista p/ baixo
	btnOverlayElem:".vtexsc-buttonOverlay", // Overlay do botão comprar
	errorElem:".vtexsc-error", // Elemento p/ exibir os erros [nota: não foi totalmente desenvolvido]
	successElem:".vtexsc-success", // Elemento p/ exibir os sucessos [nota: não foi totalmente desenvolvido]
	showCartBtn:".vtexsc-showCart", // Elemento que vai exibir o carrinho quando o mouse estiver sobre
	totalCart:".vtexsc-totalCart", // Elemento que exibe o valor total do carrinho
	buyButton:".vtexsc-buyButton", // Botão comprar no popup de SKU
	asynchronousClass:"btn-add-buy-button-asynchronous", // botão comprar na prateleira
	qttText:"", // rótulo de quantidade
	textRemove:"", // rótulo de remover
	textMoreOne:"", // rótulo de adicionar +1
	textMinusOne:"", // rótulo de reduzir 1
	firstOptionMsg:"Selecione um(a) ", // deixe uma string vazio para não alterar o padrão do sistema. Esta opção é p/ SKU em selectbox. Esta frase somente será aplicada se o 1o "option" estiver vazio
	ajaxErroMsg:"Houve um erro ao tentar adicionar/alterar seu produto no carrinho.",
	changeQttError:"Provavelmente esta alteração não obteve êxito!",
	skuNotSelected:"Selecione o(a) #groupName",
	skuNotLocated:"Não foi possível obter as informações das variações deste produto.\nVocê será redirecionado para a página de detalhes deste produto.",
	skuUnavailable:"Esta variação de produto não esta disponpível no momento.",
	regularPricePopupHtml:'<div class="regularPrice">De: <span>R$ #regularPrice</span></div>', // Html do "preço de" a ser exibido dentro do popup de seleção do SKU
	newPricePopupHtml:'<div class="newPrice">Por: <span>R$ #newPrice</span></div>', // Html do "preço por" a ser exibido dentro do popup de seleção do SKU
	installmentPricePopupHtml:'<div class="installmentPrice">ou em até <span>#installmentQtt</span>X de <span>R$ #installmentValue</span> sem juros</div>', // Html do "preço parcelado" a ser exibido dentro do popup de seleção do SKU
	fullPricePopupHtml:'<div class="fullPrice">à vista</div>', // Html do "preço a vista" a ser exibido dentro do popup de seleção do SKU
	currency:"R$",
	cartHideTime:5000, // Tempo que o carrinho permanecerá vísivel ao passar o maouse sobre ou quando um novo produto for adicionado
	notAjaxStop:false, // Define se será realizada uma busca por novos botões em todo ebento AjaxStop
	callback:function(){}, // Callback após execução do plugin, desconsiderando as chamadas assíncronas
	ajaxCallback:function(){}, // Callback após o produto ser adicionado ao carrinho
	succesShow:function(elem)
	{
		elem.show();
	},
	// Animação ao exibir o carrinho. Recebe como parametro o Carrinho e uma função p/ ser executada no callback da animação.
	cartShow:function(elem, callback)
	{
		elem.slideDown(callback);
	},
	// Animação ao esconder o carrinho
	cartHide:function(elem, hideFunction)
	{
		clearTimeout(vtexscCartHideTimeOut);
		vtexscCartHideTimeOut=setTimeout(function(){
			hideFunction(elem);
		},5000);
	},
	// Ação p/ remover a classe do último item adicionado ao carrinho
	resetNewItem:function(elem)
	{
		setTimeout(function(){
			elem.removeClass("vtexsc-newItem");
		},2500);
	},
	// Obtendo os SKU do html da página de produtos
	getSkuHtml:function($productHtml)
	{
		return $productHtml.find("ul.topic");
	},
	// Estrutura do conteúdo do popup. Recebe como parâmetro os SKUs obtidos através do método "getSkuHtml",
	// o elemento jQuery onde será exibido a imagem do produto
	// e o elemento jQuery onde será informado o valor do produto, utilizando o conteúdo do parametro "oldPricePopupHtml","newPricePopupHtml","installmentPricePopupHtml"
	formatSkuPopup:function($skuList,$productImage,$prodPriceElem,$title)
	{
		var wrap,listWrap,btn,prodImg,skusWrap,price,title;

		wrap=jQuery('<div class="skuWrap_"><div class="selectSkuTitle">Selecione a variação do produto</div></div>');
		title=jQuery('<div class="vtexsm-prodTitle"></div>');
		listWrap=jQuery('<div class="skuListWrap_"></div>');
		btn=jQuery('<div class="vtexsc-buttonWrap clearfix"><a href="#" class="vtexsc-buyButton"></a></div>');
		skusWrap=jQuery('<div class="vtexsc-skusWrap"></div>');
		price=jQuery('div');

		$skuList.appendTo(listWrap);
		$productImage.appendTo(skusWrap);
		listWrap.appendTo(skusWrap);
		$prodPriceElem.appendTo(skusWrap);
		title.append($title);
		title.appendTo(wrap);
		skusWrap.appendTo(wrap);
		btn.appendTo(wrap);

		return wrap;
	}
});
```