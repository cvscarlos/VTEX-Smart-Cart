/**
* VTEX Smart Cart
* @author Carlos Vinicius [ QUATRO DIGITAL ]
* @version 4.4
* @license MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT>
*/

/* Popup2 V 1.23 */
if(typeof jQuery.fn.vtexPopUp2 !== "function"){
	jQuery.fn.vtexPopUp2=function(l){var j=jQuery(this);if(1>j.length)return j;var i=jQuery("body"),d=i.find(".boxPopUp2"),k="object"==typeof console;1>d.length&&(d=jQuery('<div class="boxPopUp2"><div class="boxPopUp2-wrap"><span class="boxPopUp2-close"></span><div class="boxPopUp2-content"></div></div></div>'),i.prepend(d),d.after('<div class="boxPopUp2-overlay"></div>'));var c=jQuery.extend({popupType:null,closeContent:null,popupClass:"",quickViewClass:".quickViewLink",initCallback:function(){},showCallback:function(){},
	closeCallback:function(){}},l),l=d.find(".boxPopUp2-close"),f=d.find(".boxPopUp2-content"),m=i.find(".boxPopUp2-close, .boxPopUp2-overlay"),n=i.find(".boxPopUp2-overlay"),h=jQuery(document);null!=c.closeContent&&l.html(c.closeContent);var b={positioning:function(){var a=h.scrollTop(),b=jQuery(window).height(),c=d.outerHeight(!0);d.css("top",a+(c>=b?20:(b-c)/2)+"px")},show:function(a){a=a||{};n.fadeTo("fast",0.5,function(){d.show().addClass("popupOpened");"boolean"===typeof a.loading&&!0===a.loading?
	b.showLoading():b.hideLoading();"function"===typeof a.callback&&a.callback();c.showCallback(d)})},hideLoading:function(){f.filter(":visible").css("background-image","none")},showLoading:function(){f.filter(":visible").css("background-image",'url("/arquivos/ajax-loader.gif")')},close:function(a){var a=a||{},b=function(){n.fadeOut("fast");d.fadeOut("fast",function(){f.empty()});f.attr("class","boxPopUp2-content");d.attr("class","boxPopUp2")};"boolean"==typeof a.closeNow&&!0==a.closeNow&&b();1>m.filter(".boxPopUp2-clickActive").length&&
	(m.addClass("boxPopUp2-clickActive").bind("click",function(){"function"===typeof a.clickCallback?a.clickCallback():c.closeCallback(d);b()}),h.bind("keyup",function(a){27==(a.keyCode?a.keyCode:a.which)&&b()}));if(j.hasClass("autoClose")){var g=(j.attr("class")||"").split("ac_").pop().split(" ").shift();if(isNaN(parseFloat(g)))return k&&console.log("[Erro] O tempo informado (em segundos) n\u00e3o \u00e9 um valor num\u00e9rico: \u201c"+g+"\u201d"),!1;setTimeout(function(){b()},1E3*g)}},setType:function(a){if(a.hasClass("quickViewLink"))b.quickView(a);
	else if(a.hasClass("giftListWrap"))b.giftList(a);else if(a.hasClass("installmentInfoTpl"))b.paymentForms(a);else if(a.hasClass("shipping-value"))b.calculateShipping(a);else if(a.hasClass("freeContent"))b.freeContent(a);else if(a.hasClass("boxPopUp2"))b.closeNow(a);else if(a.hasClass("referAFriendTpl"))b.productReferAFriend(a);else if(0<a.filter("#btnReferAFriend").length)b.giftListReferFriend(a);else if(0<a.filter("#lnkPubliqueResenha").length)b.postRatingComment(a);else if(0<a.filter("#palerta").length)b.cartCheckoutAlert(a);
	else if(a.hasClass("lnkAddPhoto"))c.popupType="minhaContaFoto",b.userAccount(a);else return!1},checkType:function(a){"cadastroCliente"===c.popupType||"minhaContaFoto"===c.popupType?b.userAccount(a):"newsletter"===c.popupType?b.newsletter(a):"quickview"===c.popupType?b.quickView(a):"giftlist"===c.popupType?b.giftList(a):"paymentforms"===c.popupType?b.paymentForms(a):"shipping"===c.popupType?b.calculateShipping(a):"string"==typeof c.popupType&&"freecontent"===c.popupType.toLowerCase()?b.freeContent(a):
	"closenow"===c.popupType?b.closeNow(a):"GiftListReferAFriend"===c.popupType?b.giftListReferFriend(a):"postRatingComment"===c.popupType?b.postRatingComment(a):b.freeContent(a)},exec:function(){j.each(function(){var a=$(this);null===c.popupType?b.setType(a):!1===b.checkType(a)&&b.setType(a)});c.initCallback()},userAccount:function(a){var e="";"cadastroCliente"===c.popupType?e="signInPopups":"minhaContaFoto"===c.popupType&&(e="profilePhoto");a.unbind().removeAttr("onclick");var g=a.attr("href")||"";
	a.bind("mouseenter",function(){a.unbind().bind("click",function(){d.addClass(c.popupClass+" "+e+"Main");""===g&&k&&console.log("N\u00e3o existe URL no atributo href");jQuery('<iframe src="'+g+'" frameborder="0" allowtransparency="true"></iframe>').appendTo(f.addClass(c.popupClass+" "+e));b.show({loading:!0});b.positioning();b.close();return!1})})},newsletter:function(a){a.clone().appendTo(f.addClass(c.popupClass+" newsletterPopup"));d.addClass(c.popupClass+" newsletterMain");b.show();b.positioning();
	b.close()},quickView:function(a){var a=i.find(c.quickViewClass),e=function(){a.filter(":not(.quickViewLinkActivated)").addClass("quickViewLinkActivated").bind("click",function(){jQuery('<iframe src="'+jQuery(this).attr("href")+'" frameborder="0" allowtransparency="true"></iframe>').appendTo(f.addClass(c.popupClass+" productQuickView"));d.addClass(c.popupClass+" quickViewMain");b.show({loading:!0});b.positioning();b.close();return!1})};e();h.ajaxStop(e)},paymentForms:function(a){var e="",g=function(){var a=
	i.find(".see-other-payment-method-link");if(1>a.length)return k&&console.log("Url das formas de pagamento n\u00e3o encontrado. \n Verifique se o controle esta na p\u00e1gina.\n("+a.selector+")"),!1;e=/http:(.*?)(?=\&)/.exec(a[0].getAttribute("onclick").toString())[0]||"#onclickError"};g();a.bind("click",function(){jQuery("<iframe src='"+e+"' frameborder='0' allowtransparency='true'></iframe>").appendTo(f.addClass(c.popupClass+" paymentFormsPopup"));d.addClass(c.popupClass+" paymentFormsMain");b.show({loading:!0});
	b.positioning();b.close();return!1});h.ajaxStop(g)},calculateShipping:function(){h.ajaxStop(function(){var a=i.find("#calculoFrete").children();if(1>a.length)return!1;a.find("span.cep-busca a").attr("target","_blank");a.appendTo(f.addClass(c.popupClass+" shippingCalculationPopup"));d.addClass(c.popupClass+" shippingCalculationMain");b.show();b.positioning();b.close()})},giftList:function(a){a.appendTo(f.addClass(c.popupClass+" giftListPopup"));d.addClass(c.popupClass+" giftListMain");b.show();b.positioning();
	b.close({clickCallback:c.closeCallback})},cartCheckoutAlert:function(a){a.appendTo(f.addClass(c.popupClass+" cartCheckoutAlertPopup"));d.addClass(c.popupClass+" cartCheckoutAlertMain");b.show();b.positioning();b.close()},freeContent:function(a){a.appendTo(f.addClass(c.popupClass+" freeContentPopup"));d.addClass(c.popupClass+" freeContentMain");b.show();b.positioning();b.close()},closeNow:function(){b.close({closeNow:!0})},giftListReferFriend:function(a){var e=function(){var a=$(this).attr("href");
	if("undefined"===typeof a||""===a)return k&&console.log("[Erro] Url do popup n\u00e3o encontrada."),!1;f.addClass(c.popupClass+" freeContentPopup").load(a);d.addClass(c.popupClass+" giftListReferFriendMain");b.show({loading:!0});b.positioning();b.close();return!1},g=function(){a.unbind().bind("mouseenter",function(){a.unbind().bind("click",e)})};g();h.ajaxStop(g)},productReferAFriend:function(a){var e=jQuery('<div class="referAFriendPopUpWrap"></div>');a.bind("click",function(){var a=(jQuery(this).parent().find("#div-referAFriend input").attr("onclick")||
	"").toString(),a=/\/referAFriend\/Form\/[0-9]+\?/i.exec(a);if(null===a)return alert("Desculpe, n\u00e3o foi poss\u00edvel abrir o formul\u00e1rio."),!1;e.empty().load(a[0],function(){b.positioning()});e.appendTo(f.addClass(c.popupClass+" freeContentPopup"));d.addClass(c.popupClass+" freeContentMain");b.show();b.positioning();b.close();return!1});h.ajaxStop(function(){0<f.find(".referAFriendPopUpWrap #btnFechar").length&&setTimeout(b.closeNow,1500)})},postRatingComment:function(a){var a=a.filter(":not(.popUpPublishReviewActivated)"),
	e=!1;if(1>a.length)return!1;a.bind("click",function(){var a=jQuery(this).attr("href")||"";if(""===a)return k&&console.log("[Erro] N\u00e3o foi poss\u00edvel obter os dados para abrir o popup de resenha."),!1;a=a.split(")").shift().split("(").pop().split(",");if(3!=a.length)return k&&console.log("[Erro] O array com os dados do cliente retornou um valor inesperado."),!1;if(e)return!1;e=!0;jQuery.ajax({url:"/publishuserreviewcomment",type:"POST",data:{productId:a[1],clientId:a[0],categoryId:a[2]},success:function(a){var g=
	jQuery(a);f.addClass(c.popupClass+" userReviewPopup").html(g);d.addClass(c.popupClass+" userReviewPopupMain");b.show({callback:function(){g.find("#txtTituloResenha:hidden").val("titulo_auto");var a=f.find("a#rtAvaliacao_A0"),b=function(){a.attr("title",a.find(".filledRatingStar:last").index()+1||0)};a.find("span").bind("mouseenter",b);a.bind("mouseleave",b)}});b.positioning();b.close();e=!1},error:function(){e=!1}});return!1}).addClass("popUpPublishReviewActivated");0==jQuery.fn.vtexPopUp2.data.userReviewCount&&
	h.ajaxStop(function(){f.hasClass("userReviewPopup")&&0==f.find(".formUserComment").children().length&&b.closeNow()});jQuery.fn.vtexPopUp2.data.userReviewCount++}};b.exec();return j};jQuery.fn.vtexPopUp2.data={userReviewCount:0};
}
/**
 * Quatro Digital - jQuery Ajax Queue
 * @author Carlos Vinicius [ QUATRO DIGITAL ]
 * @version 1.0
 * @license MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT>
*/
(function(a){"function"!==typeof a.qdAjax&&(a.qdAjaxQueue={},a.qdAjax=function(f){var c,b;c=a.extend({},{success:function(){},error:function(){},complete:function(){},clearQueueDelay:0},f);b=escape(encodeURIComponent(c.url));a.qdAjaxQueue[b]=a.qdAjaxQueue[b]||{};a.qdAjaxQueue[b].opts=a.qdAjaxQueue[b].opts||[];a.qdAjaxQueue[b].opts.push({success:function(a,b,d){c.success.call(this,a,b,d)},error:function(a,b,d){c.error.call(this,a,b,d)},complete:function(a,b){c.complete.call(this,a,b)}});f=a.extend({},
c,{success:function(c,g,d){for(var e in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[e]&&(a.qdAjaxQueue[b].opts[e].success.call(this,c,g,d),a.qdAjaxQueue[b].opts[e].success=function(){})},error:function(c,g,d){for(var e in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[e]&&(a.qdAjaxQueue[b].opts[e].error.call(this,c,g,d),a.qdAjaxQueue[b].opts[e].error=function(){})},complete:function(f,g){for(var d in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[d]&&
(a.qdAjaxQueue[b].opts[d].complete.call(this,f,g),a.qdAjaxQueue[b].opts[d].complete=function(){});setTimeout(function(){a.qdAjaxQueue[b].jqXHR=void 0;a.qdAjaxQueue[b].opts=void 0},c.clearQueueDelay)}});"undefined"===typeof a.qdAjaxQueue[b].jqXHR&&(a.qdAjaxQueue[b].jqXHR=a.ajax(f))})})(jQuery);
/**
* Vtex Simple Cart
* @author Carlos Vinicius [ QUATRO DIGITAL ]
* @version 3.2
* @license MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT>
*/
if(typeof jQuery.fn.simpleCart !== "function"){
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
(function(a){a.fn.simpleCart=jQuery.fn.vtexCart=function(k){var c,g,f,e,j,h;g=function(a,b){"object"===typeof console&&("undefined"!==typeof b&&"alerta"===b.toLowerCase()?console.warn("[Simple Cart] "+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?console.info("[Simple Cart] "+a):console.error("[Simple Cart] "+a))};c=jQuery(this);if(!c.length)return c;a.fn.simpleCart.elements=a.fn.simpleCart.elements.add(c);e=jQuery.extend({cartQtt:".vtex-cartQtt",cartTotal:".vtex-cartTotal",itemsText:".vtex-ItemsText",
callback:function(){}},k);f=jQuery("");c.data("qd_simpleCartOpts",e);j=function(a,b){var d=parseInt(a,10);isNaN(d)?g("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero!"):1===d?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};h=function(a,b){var d;d=a.find(".amount-items-em").html();1>a.filter(".cartInfoWrapper").length||(b.$this.show(),b.cartTotalE.html(a.find(".total-cart-em").html()),b.cartQttE.html(d),j(d,b.itemsTextE))};a.qdAjax({url:"/no-cache/QuantidadeItensCarrinho.aspx",
success:function(j){c.each(function(){var b={},d;d=a(this);b.$this=d;b.cartQttE=d.find(e.cartQtt)||f;b.cartTotalE=d.find(e.cartTotal)||f;b.itemsTextE=d.find(e.itemsText)||f;h(a(j),b)})},error:function(){g("N\u00e3o foi poss\u00edvel fazer a requisi\u00e7\u00e3o p/ obter os dados do carrinho.");-1<document.location.host.indexOf("localhost")&&c.show()},clearQueueDelay:500});e.callback();return c};a.fn.simpleCart.elements=a("");var h;"undefined"!==typeof ajaxRequestbuyButtonAsynchronous&&(h=ajaxRequestbuyButtonAsynchronous,
ajaxRequestbuyButtonAsynchronous=function(k,c,g,f,e){h.call(this,k,c,g,f,function(){"function"===typeof e&&e();a.fn.simpleCart.elements.each(function(){var c;c=a(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})});a(function(){a(".qd-CartAuto").simpleCart()})})(jQuery);
}

/* Get Attributes */
(function(b){b.fn.getAttributes=function(){var c={},a=b(this).first();if(!a.length)return this;b.each(a[0].attributes,function(b,a){c[a.name]=a.value});return c}})(jQuery);

"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});

/* Plugin */
var vtexscCartHideTimeOut=0;
jQuery.fn.smartCart=function(opts)
{
	var log,defaults,options,$this,$empty,cartE,checkErrors,onlyCart,skuCache,extTitle,errorE, successE, showCartBtnE, currentQtt, scrollDownE, scrollTopE, totalCartWrap, cartTextClass, cartOverlayClass, cartText, cartOverlay, buyButtonE, totalCartE, tmp;
	
	// Fun��o de LOG
	extTitle="Smart Cart";
	log=function(b,a){"object"===typeof console&&("object"===typeof a&&"alerta"===a.toLowerCase()?console.warn("["+extTitle+"] "+b):"object"===typeof a&&"info"===a.toLowerCase()?console.info("["+extTitle+"] "+b):console.error("["+extTitle+"] "+b))};
	
	defaults=
	{
		method:1,
		htmlFormat:2, // 1 = UL, 2 = Tabela (Modo de lista n�o esta completo)
		skuThumbId:3, // Id da miniatura a ser exibida no popup de sele��o do SKU
		cartElem:".vtexsc-cart", // Elemento que mostra os itens existentes no carrinho
		listElem:".vtexsc-productList", // Elemento onde os produtos ser�o listados
		scrollTop:".vtexsc-arrowTop", // Elemento p/ rolar a lista p/ cima
		scrollDown:".vtexsc-arrowBottom", // Elemento p/ rolar a lista p/ baixo
		btnOverlayElem:".vtexsc-buttonOverlay", // Overlay do bot�o comprar
		errorElem:".vtexsc-error", // Elemento p/ exibir os erros [nota: n�o foi totalmente desenvolvido]
		successElem:".vtexsc-success", // Elemento p/ exibir os sucessos [nota: n�o foi totalmente desenvolvido]
		showCartBtn:".vtexsc-showCart", // Elemento que vai exibir o carrinho quando o mouse estiver sobre
		totalCart:".vtexsc-totalCart", // Elemento que exibe o valor total do carrinho
		buyButton:".vtexsc-buyButton", // Bot�o comprar no popup de SKU
		asynchronousClass:"btn-add-buy-button-asynchronous", // bot�o comprar na prateleira
		simpleCartSelector:".qd-CartAuto", // bot�o comprar na prateleira
		qttText:"", // r�tulo de quantidade
		textRemove:"", // r�tulo de remover
		textMoreOne:"", // r�tulo de adicionar +1
		textMinusOne:"", // r�tulo de reduzir 1
		firstOptionMsg:"Selecione um(a) ", // deixe uma string vazio para n�o alterar o padr�o do sistema. Esta op��o � p/ SKU em selectbox. Esta frase somente ser� aplicada se o 1o "option" estiver vazio
		ajaxErroMsg:"Houve um erro ao tentar adicionar/alterar seu produto no carrinho.",
		changeQttError:"A quantidade selecionada excede nossa disponibilidade de estoque atual.",
		skuNotSelected:"Selecione o(a) #groupName",
		skuNotLocated:"N�o foi poss�vel obter as informa��es das varia��es deste produto.\nVoc� ser� redirecionado para a p�gina de detalhes deste produto.",
		skuUnavailable:"Esta varia��o de produto n�o esta disponp�vel no momento.",
		regularPricePopupHtml:'<div class="regularPrice">De: <span>R$ #regularPrice</span></div>', // Html do "pre�o de" a ser exibido dentro do popup de sele��o do SKU
		newPricePopupHtml:'<div class="newPrice">Por: <span>R$ #newPrice</span></div>', // Html do "pre�o por" a ser exibido dentro do popup de sele��o do SKU
		installmentPricePopupHtml:'<div class="installmentPrice">ou em at� <span>#installmentQtt</span>X de <span>R$ #installmentValue</span> sem juros</div>', // Html do "pre�o parcelado" a ser exibido dentro do popup de sele��o do SKU
		fullPricePopupHtml:'<div class="fullPrice">� vista</div>', // Html do "pre�o a vista" a ser exibido dentro do popup de sele��o do SKU
		currency:"R$",
		cartHideTime:5000, // Tempo que o carrinho permanecer� v�sivel ao passar o maouse sobre ou quando um novo produto for adicionado
		notAjaxStop:false, // Define se ser� realizada uma busca por novos bot�es em todo ebento AjaxStop
		lastCallback:null,
		updateCart:false, // Se passado como true a �nica fun��o que ele ir� executar � atualizar o carrinho
		noCart:false, // Aplica a fun��o do bot�o comprar mas n�o exibe o carrinho
		noCartCallback:function(sku){}, // Callback para quando o produto � adicionado ao carrinho e n�o houve erro na requisi��o
		callback:function(){}, // Callback ap�s execu��o do plugin, desconsiderando as chamadas ass�ncronas
		ajaxCallback:function(){}, // Callback ap�s o produto ser adicionado ao carrinho
		succesShow:function(elem)
		{
			elem.show();
		},
		// Anima��o ao exibir o carrinho. Recebe como parametro o Carrinho e uma fun��o p/ ser executada no callback da anima��o.
		cartShow:function(elem, callback)
		{
			elem.slideDown(callback);
		},
		// Anima��o ao esconder o carrinho
		cartHide:function(elem, hideFunction, time)
		{
			clearTimeout(vtexscCartHideTimeOut);
			vtexscCartHideTimeOut=setTimeout(function(){
				hideFunction(elem);
			},time);
		},
		// A��o p/ remover a classe do �ltimo item adicionado ao carrinho
		resetNewItem:function(elem)
		{
			setTimeout(function(){
				elem.removeClass("vtexsc-newItem");
			},2500);
		},
		// Obtendo os SKU do html da p�gina de produtos
		getSkuHtml:function($productHtml)
		{
			return $productHtml.find("ul.topic");
		},
		// Estrutura do conte�do do popup. Recebe como par�metro os SKUs obtidos atrav�s do m�todo "getSkuHtml",
		// o elemento jQuery onde ser� exibido a imagem do produto
		// e o elemento jQuery onde ser� informado o valor do produto, utilizando o conte�do do parametro "oldPricePopupHtml","newPricePopupHtml","installmentPricePopupHtml"
		formatSkuPopup:function($skuList,$productImage,$prodPriceElem,$title)
		{
			var wrap,listWrap,btn,prodImg,skusWrap,price,title;

			wrap=jQuery('<div class="skuWrap_"><div class="selectSkuTitle">Selecione a varia��o do produto</div></div>');
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
	};
	
    options=jQuery.extend({},defaults, opts);
	$this=jQuery(this);
	$empty=jQuery("");
	cartE=jQuery(options.cartElem);
	checkErrors=true;
	onlyCart=false;
	skuCache={};
	
	// Exibindo somente o carrinho
	if($this.length<1 && cartE.length>0)
	{
		onlyCart=true;
		checkErrors=false;
	}
	
	// Reportando erros
	if($this.length<1 && checkErrors) return $this;
	if(!options.noCart && (cartE.length<1 && checkErrors)){log("Elemento do carrinho n�o encontrado \n ("+cartE.selector+")"); return false;}

	var listE=cartE.find(options.listElem);
	// Reportando erros
	if(!options.noCart && (listE.length<1 && checkErrors)){log("Lista de produtos n�o encontrada \n ("+listE.selector+")"); return false;}

	errorE=jQuery(options.errorElem)||$empty;
	successE=jQuery(options.successElem)||$empty;
	showCartBtnE=jQuery(options.showCartBtn)||$empty;
	currentQtt={};
	scrollDownE=cartE.find(options.scrollDown)||$empty;
	scrollTopE=cartE.find(options.scrollTop)||$empty;
	totalCartWrap=jQuery(options.totalCart)||$empty;
	cartTextClass="vtexsc-text";
	cartOverlayClass="vtexsc-overlay";
	cartText=jQuery("<span class='"+cartTextClass+"'></span>");
	cartOverlay=jQuery("<div class='"+cartOverlayClass+"'></div>");
	buyButtonE=$empty;
	
	if(!totalCartWrap.children("."+cartOverlayClass).length)
		totalCartWrap.append(cartOverlay);
	
	tmp=totalCartWrap.children("."+cartTextClass);
	if(tmp.length)
		totalCartE=tmp;
	else
	{
		totalCartWrap.append(cartText);
		totalCartE=cartText;
	}
	
	var fns=
	{
		buyButtons:function()
		{
			$this.not(".vtexsm_activated").each(function(){
				var btn=jQuery(this);
				if(!btn.hasClass("actionActivated") && fns.buyAsynchronous(btn))
					btn.addClass("actionActivated").bind("click",function(){
						if((typeof selecionarSKU === "string" && (btn.attr("href")||"").indexOf(selecionarSKU)>-1) /* || ((btn.attr("href")||"").indexOf("elecione")>-1) */)
							return true;
							
						var sku=fns.getSku(btn);
						if(sku!=="")
							fns.skuToCart(btn,sku);
						else
							log("O Sku n�o foi obtido! A execu��o parou"); 
						return false;
					});
			}).addClass("vtexsm_activated");
		},
		buyAsynchronous:function(btn)
		{
			// Checando se � o bot�o esta em uma prateleira
			if(!btn.hasClass(options.asynchronousClass)) return true;
			// Removendo antigos eventos e alterando a classe para que o script nativo da Vtex n�o seja aplicado
			btn.unbind("click").removeClass(options.asynchronousClass).addClass("asynchronousBuyButton");
			// Retorna p/ o script padr�o adicionar o evento de click caso o produto tenha apenas um Sku
			if(btn.hasClass("remove-href")) return true;
			// O produto possui mais de 1 Sku
			fns.multiplesSkus(btn);
			return false;
		},
		multiplesSkus:function(btn)
		{
			btn.bind("click",function(){
				var url,btnOverlayE,prodImgElem,prodPriceElem;
				
				url=btn.attr("href")||"";
				// Reportando erros
				if(url==""){log("N�o foi poss�vel obter a URL para a p�gina do produto \n m�todo: multiplesSkus"); return false;}
				
				btnOverlayE=btn.siblings(options.btnOverlayElem).show();
				prodImgElem=jQuery('<div class="vtexsc-skuProductImage"></div>');
				prodPriceElem=jQuery('<div class="vtexsc-skuProductPrice"></div>');
				
				fns.skuProductImg(prodImgElem,btn);
				
				jQuery.ajax({
					url:url,
					success:function(data){fns.productSuccess(data,url,btnOverlayE,prodImgElem,prodPriceElem,btn);},
					error:function()
					{
						log("Erro ao requisitar a p�gina do produto via Ajax");
					}
				});
				
				return false;
			});
		},
		skuProductImg:function(prodImgElem,btn)
		{
			var li=fns.getParent(btn,"li");
			li.find("a[href$='/p'] img").first().clone().appendTo(prodImgElem);
		},
		getParent:function(startElem,searchElemStr)
		{
			var p;
			p=startElem.parent();
			
			if(p.is("html"))
				return jQuery("");
			else if(p.is(searchElemStr))
				return p;
			else if(!p.length)
				return p;
			else
				return fns.getParent(p,searchElemStr);
		},
		productSuccess:function(data,url,btnOverlayE,prodImgElem,prodPriceElem,btn)
		{
			var $data,skuOptions,located,skuSpecifications,chks,selectBox,prodTitle,tmp,tmpValue;
			
			$data=jQuery(data);
			skuOptions=options.getSkuHtml($data);
			located=false;
			skuSpecifications=null;

			$data.filter("script:not([src])").each(function(){
				var text=this.innerHTML;
				if(text.indexOf("myJSONSkuSpecification")>-1)
				{
					text=text.replace(":,",':"",').replace(":}",':""}').replace(":]",':""]');
					eval(text);
					skuSpecifications=myJSONSkuSpecification;
					located=true;
					return false;
				}
			});
			
			if(!located)
			{
				log("N�o foi poss�vel localizar as especifica��es do SKU. \n A p�gina ser� redirecionada!");
				setTimeout(function(){document.location.href=url;},500);
				return false;
			}
			
			tmp=fns.getParent(btn,"li");
			tmpValue=tmp.find("a:first").attr("title");
			if(typeof tmpValue != "undefined" && tmpValue != "")
				prodTitle=tmpValue;
			else
				prodTitle=tmp.find("a:eq(1)").text();
			
			options.formatSkuPopup(skuOptions,prodImgElem,prodPriceElem,prodTitle).addClass("freeContent vtexsc-selectSku").vtexPopUp2({popupClass:"vtexsm-popupContent"});
			skuSpecifications=fns.specificationsReorder(skuSpecifications);
			buyButtonE=jQuery(options.buyButton)||$empty;
			
			chks=skuOptions.find("[type=checkbox]");
			selectBox=skuOptions.find("select.sku-selector");
			
			if(chks.length>0)
			{
				tempChks=jQuery("");
				chks.each(function(){
					var $t=jQuery(this),
						attr=$t.getAttributes(),
						newInput=jQuery('<input type="radio" name="'+attr.name+'" specification="'+(attr.specification||"")+'" class="'+(attr["class"]||"")+'" id="'+(attr.id||"")+'" value="'+attr.value+'" />');

					$t.after(newInput);
					$t.remove();
					tempChks=tempChks.add(newInput);
				});
				chks=tempChks;
			
				btnOverlayE.hide();

				if(skuSpecifications.specifications>1)
					fns.multipleSkuConfigCheckbox(skuOptions, skuSpecifications, chks, prodImgElem,prodPriceElem);
				else
					fns.skuConfigCheckbox(skuOptions, skuSpecifications, chks, prodImgElem,prodPriceElem);

				fns.buyButtonCheckbox(chks, skuSpecifications, skuOptions, url, btnOverlayE);
			}
			else if(selectBox.length>0)
			{
				if(selectBox.length>1) return log("Este plugin ainda n�o suporta mais de 1 selectbox.");
			
				btnOverlayE.hide();
				fns.skuConfigSelectbox(skuOptions, skuSpecifications, selectBox, prodImgElem,prodPriceElem);
				fns.buyButtonSelectbox(selectBox, skuSpecifications, skuOptions, url, btnOverlayE);
			}
			else
				log("Elemento n�o previsto");

			if(typeof options.lastCallback=="function")
                        options.lastCallback();
		},
		skuConfigSelectbox:function(skusHtml, skuSpecifications, selectBox, prodImgElem,prodPriceElem)
		{
			var option,li;
			
			option=selectBox.find("option:first");
			li=selectBox.parent().siblings(".specification");
			if(option.text().trim()=="" && options.firstOptionMsg!="")
			{
				option.text(options.firstOptionMsg+li.text().capitalize());
			}
			
			// selectBox
			selectBox.change(function(){
				if($(this).val()!="")
					fns.actionsBySku(skuSpecifications,$(this).val(),prodImgElem,prodPriceElem);
			});
		},
		buyButtonSelectbox:function(selectBox, skuSpecifications, skuHtml, url, btnOverlayE)
		{
			buyButtonE.bind("click",function(){
				var skuId,value,fnSuccess;
				
				value=selectBox.val();
				if(value=="")
				{
					alert("Selcione a especifica��o �"+skuHtml.find(".specification").text()+"�");
					return false;
				}
				
				if(typeof skuSpecifications.skus[value]=="undefined")
					return log("N�o foi poss�vel obter o SKU na lista de especifica��es");
				skuId=skuSpecifications.skus[value];
				
				fnSuccess=function(obj)
				{
					if(!obj.Availability)
					{
						alert("A especifica��o �"+selectBox.find("[value="+value+"]").text()+"� esta indispon�vel.");
						return;
					}
					
					fns.skuToCart($empty,obj.Id,undefined,btnOverlayE);
					jQuery(".boxPopUp2").vtexPopUp2();
				};
				
				if(typeof skuCache[skuId] == "object")
					fnSuccess(skuCache[skuId][0]);
				else
				{
					jQuery.ajax({
						"url":"/produto/sku/"+skuId,
						"data":"json",
						"success":function(data, textStatus, jqXHR)
						{
							if("object"!==typeof data)
								log("Erro ao obter informa��es do sku �"+skuId+"�.");
							else if(jqXHR.status!=0)
							{
								obj=data[0];
								skuCache[obj.Id]=data;
								
								fnSuccess(obj);
							}
							else
								log("Erro ao obter informa��es do sku �"+skuId+"�.");
						},
						"error":function()
						{
							log("Erro ao obter informa��es do sku �"+skuId+"�.");
						}
					});
					
				}
				
				return false;
			});
		},
		buyButtonCheckbox:function(chks, skuSpecifications, skuHtml, url, btnOverlayE)
		{
			buyButtonE.bind("click",function(){
				var fields=chks.filter(":checked");
				
				if(skuSpecifications.specifications<2)
				{
					if(fields.length>0)
					{
						var sku=skuSpecifications.skus[fields.val()];
						if("undefined"===typeof sku)
						{
							alert(options.skuNotLocated);
							document.location.href=url;
						}
						else
						{
							if("False"===sku[1])
								alert(options.skuUnavailable);
							else
							{
								fns.skuToCart($empty,sku[0],undefined,btnOverlayE);
								jQuery(".boxPopUp2").vtexPopUp2();
							}
						}
					}
					else
					{
						var txt=skuHtml.find(".specification").eq(0).text()||" varia��o do produto";
						alert(options.skuNotSelected.replace("#groupName",txt));
					}
				}
				else
				{
					var stop=false;
					
					skuHtml.each(function(){
						var $t=jQuery(this);
						
						if($t.find("input:checked").length<1)
						{
							var txt=skuHtml.find(".specification").eq($t.index()).text()||" varia��o do produto";
							alert(options.skuNotSelected.replace("#groupName",txt));
							stop=true;
							return false;
						}
						
						
					});
					
					if(!stop)
					{
						var sku,key=[];

						fields.each(function(){
							key.push(jQuery(this).val());
						});
						
						sku=skuSpecifications.skus[key.join(",")];
						
						if("undefined"===typeof sku)
						{
							alert(options.skuNotLocated);
							document.location.href=url;
						}
						else
						{
							if("False"===sku[1])
								alert(options.skuUnavailable);
							else
							{
								fns.skuToCart($empty,sku[0],undefined,btnOverlayE);
								jQuery(".boxPopUp2").vtexPopUp2();
							}
						}
					}
				}
				
				return false;
			});
		},
		specificationsReorder:function(sku)
		{
			var out={};
			
			// Especifica��o
			if("undefined"!==typeof sku.specifications)
				out.specifications=sku.specifications;
			else
			{
				log("N�o foi localizado o item �specifications� do objeto com as especifica��es de SKU.");
			}
			
			// Combos / Combina��o
			if("undefined"!==typeof sku.combination)
			{
				var q=sku.combination.length;
				out.combination={};
				for(var i=0; i<q; i++)
					for(var k in sku.combination[i])
						if(typeof sku.combination[i][k] === "string")
							out.combination[k]=sku.combination[i][k].split(",");
						else
							for(var l in sku.combination[i][k][0]) // Ainda n�o esta desenvolvida p/ multiplas op��es
							{
								out.combination[k]=sku.combination[i][k][0][l].split(",");
								break; // Ainda n�o esta desenvolvida p/ multiplas op��es
							}
			}
			else
			{
				log("N�o foi localizado o item �combination� do objeto com as especifica��es de SKU.");
			}
			
			// Skus
			if("undefined"!==typeof sku.skus)
			{
				var q=sku.skus.length;
				out.skus={};
				for(var i=0; i<q; i++)
					for(var k in sku.skus[i])
						out.skus[k]=sku.skus[i][k].split(",");
			}
			else
			{
				log("N�o foi localizado o item �skus� do objeto com as especifica��es de SKU.");
			}
			
			return out;
		},
		getSku:function(btn)
		{
			if(btn.hasClass("asynchronousBuyButton"))
				return (btn.attr("id")||"").replace("idprod","");
			else
				return (btn.attr("href")||"").split("dSku=")[1]||"";
		},
		selectUniqueSku:function(skusHtml)
		{
			skusHtml.each(function(){
				var t,input;
				t=$(this);
				input=t.find("input");
				
				if(input.length==1)
				{
					input.attr("checked",true).trigger("change").trigger("click");
					t.hide();
				}
			});
		},
		multipleSkuConfigCheckbox:function(skusHtml, skuSpecifications, chks, prodImgElem, prodPriceElem)
		{
			if(skuSpecifications.specifications>2)
				log("Esta exten�o n�o foi testada com mais de dois tipos de SKUs","Alerta");
			
			// Checando se algum SKU do primeiro grupo esta totalmente indispon�vel
			skusHtml.filter(":first").find("input").each(function(){
				var $t=jQuery(this),
					val=$t.val(),
					c, cl,
					ua=true;
					
				if(!(typeof val!="undefined" && val!="")) return;
				
				c=skuSpecifications.combination[val];
				if(typeof c=="undefined") return;
				cl=c.length;
				for(var i=0;i<cl;i++)
					if(typeof skuSpecifications.skus[val+","+c[i]] == "object" && skuSpecifications.skus[val+","+c[i]][1]=="True")
						ua=false;
						
				if(ua)
					$t.addClass("item_unavaliable").next("label").addClass("item_unavaliable");
			});
			
			// A��o do usu�rio
			chks.bind("change",function(){
				var $t,ndx,ndxArray;

				$t=jQuery(this);
				ndxArray=$t.attr("id").split("_");
				// ndx=ndxArray.pop();
				ndx=ndxArray[1]||ndxArray.pop();
				
				skusHtml.not(":eq("+ndx+")").find("input").each(function(){
					var t=jQuery(this),skuNdx;
					
					if(ndx=="0")
						skuNdx=$t.val()+","+t.val();
					else
						skuNdx=t.val()+","+$t.val();

					// Alterando a imagem do SKU e pre�o
					if(typeof skuSpecifications.skus[skuNdx] == "object" && $t.is(":checked") && t.is(":checked"))
						fns.actionsBySku(skuSpecifications,skuNdx,prodImgElem,prodPriceElem);

					if(typeof skuSpecifications.skus[skuNdx] == "object" && skuSpecifications.skus[skuNdx][1]=="False")
					{
						t.addClass("item_unavaliable").next("label").addClass("item_unavaliable");
						$t.addClass("item_unavaliable").next("label").addClass("item_unavaliable");
					}
				});
			});

			fns.selectUniqueSku(skusHtml);
			
			if(skusHtml.find("input").length<=skusHtml.length)
				log("Deve ser desenvolvida uma fun��o p/ varia��es de SKUs em que todas tem apenas uma op��o","Aviso");
		},
		actionsBySku:function(skuSpecifications,skuNdx,prodImgElem,prodPriceElem)
		{
			var img,skuId,imgs,obj,regularPrice,newPrice,popHtml,installmentPrice,fullPrice,fnSuccess;
			
			img=prodImgElem.find("img");
			if(img.length<1)
			{
				img=jQuery('<img src="" alt="" />');
				prodImgElem.append(img);
			}
			
			skuId=skuSpecifications.skus[skuNdx][0];
			fnSuccess=function(obj)
			{
				// Imagem do produto
				imgs=fns.getImageUrl(obj,options.skuThumbId);
				if(typeof imgs[0] == "string")
					img.attr("src",imgs[0]);
				else
					log("[2] N�o foi poss�vel obter a imagem p/ o sku �"+skuId+"�.");
			
				// Pre�o do produto
				regularPrice=jQuery(options.regularPricePopupHtml.replace("#regularPrice",fns.numberFormat(obj.ListPrice))).hide();
				newPrice=jQuery(options.newPricePopupHtml.replace("#newPrice",fns.numberFormat(obj.Price)));
				installmentPrice=jQuery(options.installmentPricePopupHtml.replace("#installmentQtt",obj.BestInstallmentNumber).replace("#installmentValue",fns.numberFormat(obj.BestInstallmentValue))).hide();
				fullPrice=jQuery(options.fullPricePopupHtml).hide();
				
				popHtml=jQuery("").add(regularPrice).add(newPrice).add(installmentPrice).add(fullPrice);
				
				if(obj.Price<obj.ListPrice)
					regularPrice.show();
				if(obj.BestInstallmentNumber>1)
					installmentPrice.show();
				else
					fullPrice.show();
				
				prodPriceElem.html(popHtml);
			};
			
			if(typeof skuCache[skuId] == "object")
				fnSuccess(skuCache[skuId][0]);
			else
			{
				jQuery.ajax({
					"url":"/produto/sku/"+skuId,
					"data":"json",
					"success":function(data, textStatus, jqXHR)
					{
						if("object"!==typeof data)
							log("[1] N�o foi poss�vel obter a imagem p/ o sku �"+skuId+"�.");
						else if(jqXHR.status!=0)
						{
							obj=data[0];
							skuCache[obj.Id]=data;
							
							fnSuccess(obj);
						}
						else
							log("[3] N�o foi poss�vel obter a imagem p/ o sku �"+skuId+"�.");
					},
					"error":function()
					{
						log("N�o foi poss�vel obter a imagem p/ o sku �"+skuId+"�.");
					}
				});
			}
		},
		numberFormat:function(val)
		{
			var out="",_char="", thousandsFormatted="", values, numbers, i, numLength, thousandsSeparator;
		
			values=val.toFixed(2).split(".");
			numbers=values[0].split("");
			i=0;
			numLength=numbers.length;
			thousandsSeparator=".";
			
			for (var j=values[0].length; j>0 ;j--)
			{
				_char = values[0].substr(j-1,1);
				i++;
				if (i%3==0 && numLength>i)
					_char = thousandsSeparator+_char;
				thousandsFormatted = _char+thousandsFormatted;
			}
			out=thousandsFormatted+","+values[1];
			return out;
		},
		getImageUrl:function(obj, typeId)
		{
			var out=[];
			
			if(obj.Images.length<1)
			{
				log("N�o foram encontradas imagens para o SKU: "+obj.Id,"Alerta");
				return out;
			}
			
			for(array in obj.Images)
				for(img in obj.Images[array])
					if(obj.Images[array][img].ArchiveTypeId==typeId)
					{
						out.push(obj.Images[array][img].Path);
						break;
						break;
					}

			return out;
		},
		skuConfigCheckbox:function(skusHtml, skuSpecifications, chks, prodImgElem,prodPriceElem)
		{
			skusHtml.each(function(){
				var skuGroup=jQuery(this);
				var chk=skuGroup.find("[type=radio]");

				for(var sku in skuSpecifications.skus)
					if("False"===skuSpecifications.skus[sku][1])
						chk.filter("[value='"+sku+"']").addClass("item_unavaliable").next("label").addClass("item_unavaliable");

				chk.bind("change",function(){
					var $this,name,skuNdx,specs;
					
					specs=skuSpecifications.specifications>1;
					$this=jQuery(this);
					name=[];
					chk.not($this).attr("checked",false);
					
					// Alterando a imagem do SKU e pre�o
					skuNdx=$this.val()||"_";
					if(typeof skuSpecifications.skus[skuNdx] == "object" && $this.is(":checked"))
						fns.actionsBySku(skuSpecifications,skuNdx,prodImgElem,prodPriceElem);
					
					if($this.is(":checked"))
					{
						chks.removeClass("sku-picked").next("label").removeClass("sku-picked");
						$this.addClass("sku-picked").next("label").addClass("sku-picked");
						
						if(specs)
						{
							var tmp=[($this.attr("name")||"").replace("espec_",""),($this.val()||"")];
							skusHtml.not(skuGroup).each(function(){
								var tmpArray=[];
								jQuery(this).find("[type=radio]").each(function(){
									var $this=(this);
									tmpArray[tmp[0]]=tmp[1];
									tmpArray[($this.attr("name")||"").replace("espec_","")]=($this.val()||"");
									name.push(tmpArray);
								});
							});
						}
					}
					else
					{
						$this.removeClass("sku-picked").next("label").removeClass("sku-picked");
						if(specs)
							chks.removeClass("item_unavaliable").next("label").removeClass("item_unavaliable");
					}
				});
			});
		},
		skuToCart:function(buyButton,sku,quantity,btnOverlay)
		{
			var qtt=quantity||1;
			
			//Reportando erro
			if(isNaN(parseInt(sku))){log("O SKU n�o � um n�mero: �"+sku+"�"); return false;}
			if(isNaN(parseInt(qtt))){log("A quantidade deve ser num�rica: �"+qtt+"�"); return false;}
			
			var btnOverlayE=btnOverlay||buyButton.siblings(options.btnOverlayElem);
			btnOverlayE.show();

			jQuery.ajax({
				url:"/Site/Carrinho.aspx?idSku="+sku+"&quantidade="+qtt,
				success:function(data){
					fns.skuToCartAjaxSuccess(btnOverlayE,sku,data);
					fns.updateCart();
					typeof options.noCartCallback === "function"?options.noCartCallback(sku):log("O paramentro 'noCartCallback' deve ser obrigat�riamente uma fun��o");
				},
				error:function(){
					fns.skuToCartAjaxError(btnOverlayE);
				}
			});
		},
		loadCart:function(forceLoad)
		{
			if((forceLoad||false) || !cartE.hasClass("preLoaded"))
				jQuery.qdAjax({
					url:"/Site/Carrinho.aspx",
					success:function(data)
					{
						fns.skuToCartAjaxSuccess($empty,0,data,false);
						cartE.addClass("preLoaded");
						fns.scrollAction();
					},
					error:function(){fns.skuToCartAjaxError($empty);},
					clearQueueDelay:500
				});
		},
		skuToCartAjaxSuccess:function(btnOverlayE,sku,data,showCart)
		{
			btnOverlayE.hide();

			if(data.indexOf("Ocorreu um erro")>-1) return fns.skuToCartAjaxError();
			
			var $data=jQuery(data);
			options.succesShow(successE);
			switch(options.htmlFormat)
			{
				case 1:
					fns.formatCartItens($data,sku);
				break;
				case 2:
					fns.formatCartItens2($data,sku);
				break;
			}
			if("undefined"!==typeof showCart?showCart:true)fns.displayCart();
			options.ajaxCallback();
		},
		skuToCartAjaxError:function(overlayElem)
		{
			overlayElem.hide();
			log("A requisi��o Ajax para adicionar/alterar o SKU no carrinho \n n�o obteve a resposta esperada. \n Foi retornado um texto contendo o termo �Ocorreu um erro�.");
			alert(options.ajaxErroMsg);
			return false;
		},
		formatCartItens:function($data,sku)
		{
			var cartTable=$data.find(".carrinhoTable");
			var i=0;
			if(cartTable.length<1) return false;

			cartTable.find("tbody tr").each(function(){
				var li=jQuery("<li></li>");
				var tr=jQuery(this);
				
				// Imagem
				var wrap=jQuery('<div class="cartSkuImage"></div>');
				tr.find(".sku-imagem").appendTo(wrap);
				wrap.appendTo(li);
				// Informa��es
				var wrap=jQuery('<div class="cartSkuInfo"></div>');
				var qttInput=tr.find(".boxQuantidade");
				var currentSku=qttInput.attr("title")||"";
				currentQtt=parseInt(qttInput.val());
				tr.find("h4").appendTo(wrap);
				wrap.append('<div class="cartSkuUnitPrice">'+(tr.find(".preco-unitario").html()||"").toString()+'</div>');
				var cartSkuQtt=jQuery('<div class="cartSkuQtt"><span class="cartSkuQttTxt">'+options.qttText+'<span class="vtexsc-skuQtt">'+(currentQtt||"")+'</span>'+'</span></div>');
				var skuQtt=cartSkuQtt.find(".vtexsc-skuQtt");
				wrap.append(cartSkuQtt);
				wrap.appendTo(li);
				/* A��es */
				var wrap=jQuery('<div class="cartSkuActions"></div>');
				var remove=jQuery('<span class="cartSkuRemove">'+options.textRemove+'</span>').bind("click",function(){
					fns.removeSku(li,(tr.find("a.excluir").attr("href")||"").split("IdSkuRm=").pop());
				});
				remove.appendTo(wrap);
				var moreOne=jQuery('<span class="cartSkuMoreOne">'+options.textMoreOne+'</span>').bind("click",function(){
					var out=fns.changeQantity([li,skuQtt],currentSku,currentQtt);
					if(!isNaN(out)) currentQtt=out;
				});
				var minusOne=jQuery('<span class="cartSkuMinusOne">'+options.textMinusOne+'</span>').bind("click",function(){
					var out=fns.changeQantity([li,skuQtt],currentSku,currentQtt,-1);
					if(!isNaN(out)) currentQtt=out;
				});
				var changeQttWrap=jQuery('<span class="cartSkuChangeQttWrap"></span>');
				changeQttWrap.append(moreOne).append(minusOne);
				cartSkuQtt.append(changeQttWrap);
				wrap.append(changeQttWrap.clone());
				wrap.appendTo(li);
				
				if(typeof sku!=="undefined" && currentSku==sku)
					options.resetNewItem(li.addClass("vtexsc-newItem"));
				
				if(i===0)
					listE.empty();
					
				li.append("<div class='vtexsc-overlay'></div>");
				li.appendTo(listE);
				i++;
			});
		},
		formatCartItens2:function($data,sku)
		{
			var cartTable=$data.find(".carrinhoTable");
			var i=0;
			if(cartTable.length<1) return false;

			cartTable.find("tbody tr").each(function(){
				var wrap=null;
				var tr=jQuery(this);
				var _tr=jQuery("<tr></tr>");
				_tr.addClass((tr.attr("class")||""));
				
				// Imagem
				wrap=jQuery('<td class="cartSkuImage"></td>');
				tr.find(".sku-imagem").appendTo(wrap);
				wrap.appendTo(_tr);

				// T�tulo Produto
				wrap=jQuery('<td class="cartSkuName"></td>');
				tr.find("h4").appendTo(wrap);
				wrap.appendTo(_tr);
				
				// Pre�o
				wrap=jQuery('<td class="cartSkuPrice"></td>');
				wrap.append('<div class="cartSkuUnitPrice">'+(tr.find(".preco-unitario").html()||"").toString()+'</div>');
				wrap.appendTo(_tr);
				
				// Quantidade
				wrap=jQuery('<td class="cartSkuQunatity"></td>');
				var qttInput=tr.find(".boxQuantidade");
				var currentSku=qttInput.attr("title")||"";
				curQtt=parseInt(qttInput.val());
				var cartSkuQtt=jQuery('<div class="cartSkuQtt"><span class="cartSkuQttTxt">'+options.qttText+'<span class="vtexsc-skuQtt">'+(curQtt||"")+'</span>'+'</span></div>');
				var skuQtt=cartSkuQtt.find(".vtexsc-skuQtt");
				wrap.append(cartSkuQtt);
				wrap.appendTo(_tr);
				
				currentQtt["_"+currentSku]=curQtt;
				
				// A��es
				var wrap=jQuery('<td class="cartSkuActions"></td>');
				remove=jQuery('<span class="cartSkuRemove">'+options.textRemove+'</span>').bind("click",function(){
					fns.removeSku(_tr,(tr.find("a.excluir").attr("href")||"").split("IdSkuRm=").pop());
				}).appendTo(wrap);
				var moreOne=jQuery('<span class="cartSkuMoreOne">'+options.textMoreOne+'</span>').bind("click",function(){
					var out=fns.changeQantity([_tr,skuQtt],currentSku,currentQtt["_"+currentSku]);
					if(!isNaN(out)) currentQtt["_"+currentSku]=out;
				});
				var minusOne=jQuery('<span class="cartSkuMinusOne">'+options.textMinusOne+'</span>').bind("click",function(){
					var out=fns.changeQantity([_tr,skuQtt],currentSku,currentQtt["_"+currentSku],-1);
					if(!isNaN(out)) currentQtt["_"+currentSku]=out;
				});
				var changeQttWrap=jQuery('<span class="cartSkuChangeQttWrap"></span>');
				changeQttWrap.append(moreOne).append(minusOne);
				cartSkuQtt.append(changeQttWrap);
				wrap.append(changeQttWrap.clone());
				wrap.appendTo(_tr);
				
				if(typeof sku!=="undefined" && currentSku==sku)
				{
					options.resetNewItem(_tr.addClass("vtexsc-newItem"));
				}
				
				if(i===0)
					listE.empty();
					
				_tr.find(">td").append("<div class='vtexsc-overlay'></div>");
				_tr.appendTo(listE);
				i++;
			});
			
			fns.totalCartFormat(cartTable);
		},
		totalCartFormat:function(cartTable)
		{
			totalCartE.html(cartTable.find("tfoot .subtotal .preco-total").text());
		},
		scrollNewItem:function()
		{
			var wrap=listE.parent();
			wrap.stop(true,true).animate({scrollTop:((listE.height()||0))},"fast");
		},
		updateCart:function()
		{
			if(options.noCart) return;
		
			var cart;
		
			// Verificando se tem o Simple Cart
			cart=$(options.simpleCartSelector);
			if(cart.length)
				cart.simpleCart(cart.data("qd_simpleCartOpts"));
		
			cartOverlay.show();
			jQuery.qdAjax({
				url:"/no-cache/QuantidadeItensCarrinho.aspx",
				success:fns.upCartAjaxSuccess,
				error:fns.upCartAjaxError,
				clearQueueDelay:500
			});
		},
		upCartAjaxError:function()
		{
			log("Erro ao tentar atualizar o carrinho!");
		},
		upCartAjaxSuccess:function(data)
		{
			var $data,txt,cart;
			
			$data=jQuery(data);
			txt=$data.find(".total-cart").text();
			totalCartE.text("R$ "+txt.substring(txt.search(/\d/)));
			cart=$data.filter(".cartInfoWrapper");
			
			if(cart.length>0)
				jQuery(".cartInfoWrapper").html(cart.html());
			else
				log("O carrinho n�o foi atualizado pois �.cartInfoWrapper� n�o foi encontrado no retorno da requisi��o.");
			
			cartOverlay.hide();
		},
		displayCart:function()
		{
			options.cartShow(cartE, fns.scrollNewItem);
			options.cartHide(cartE,fns.hideCart,options.cartHideTime);
		},
		removeSku:function(itemElem,skuRmId)
		{
			var sku=skuRmId||""
			
			if(isNaN(parseInt(sku))){log("O SKU deve ser num�rico: �"+sku+"�"); return false;}
			
			var overlay=itemElem.find(".vtexsc-overlay").show()||$empty;
			jQuery.ajax({
				url:"/no-cache/CarrinhoRemove.aspx?IdSkuRm="+sku,
				success:function(){
					if(options.htmlFormat===2) itemElem.hide(function(){fns.scrollAction();}).remove();
					else itemElem.slideUp(function(){fns.scrollAction(); jQuery(this).remove();});
					overlay.hide();
					fns.updateCart();
				}
			});
		},
		scrollAction:function()
		{
			cartE.filter(":hidden").addClass("calculatingTheHeight").css("visibility","hidden").show();

			var wrap=listE.parent();
			if(options.htmlFormat===2)
				var h=(wrap.height()||0)/listE.find("tr:visible").length;
			else
				var h=(wrap.height()||0)/listE.children().filter(":visible").length;
			
			cartE.filter(".calculatingTheHeight").removeClass("calculatingTheHeight").hide().css("visibility","visible");
			
			// var item=listE.find("tr:first");
			// item=item.length>0?item:listE.find("li:first");
			
			scrollDownE.unbind("click").bind("click",function(){
				var item=listE.find("tr:first");
				item=item.length>0?item:listE.find("li:first");
				wrap.stop(true,true).animate({scrollTop:"+="+item.outerHeight(true)+"px"},"fast");
			});
			scrollTopE.unbind("click").bind("click",function(){
				var item=listE.find("tr:first");
				item=item.length>0?item:listE.find("li:first");
				wrap.stop(true,true).animate({scrollTop:"-="+item.outerHeight(true)+"px"},"fast");
			});
		},
		changeQantity:function(elems,sku,curQtt,quantity)
		{
			var qtt=quantity||1;
			if(curQtt<2 && qtt<0) return curQtt; 

			var overlay=elems[0].find(".vtexsc-overlay").show()||$empty;
			curQtt=curQtt+qtt;
			jQuery.ajax({
				url:"/no-cache/CarrinhoUpdate.aspx?IdSku="+sku+"&quantidade="+curQtt,
				success:function(data){
					overlay.hide();
					if(data.indexOf("Ocorreu um erro")>-1) return fns.skuToCartAjaxError($empty);
					
					if(jQuery(data).filter(".cart-items-detail").length>0)
					{
						alert(options.changeQttError);
						currentQtt["_"+sku]=curQtt-qtt;
					}
					else
						elems[1].text(curQtt);
					
					fns.updateCart();
				},
				error:function()
				{
					fns.skuToCartAjaxError($empty);
				}
			});
			return curQtt;
		},
		hideCart:function(elem)
		{
			elem.slideUp();
		},
		mouseCartActions:function()
		{
			var actions=
			{
				mouseenter:function()
				{
					clearTimeout(vtexscCartHideTimeOut);
					options.cartShow(cartE,function(){});
				},
				mouseleave:function()
				{
					options.cartHide(cartE,fns.hideCart,options.cartHideTime);
				}
			};
			
			cartE.filter(":not(.mouseActivated)").bind(actions).addClass("mouseActivated");
			showCartBtnE.filter(":not(.mouseActivated)").bind(actions).addClass("mouseActivated");
		},
		onlyCart:function()
		{
			fns.loadCart();
			fns.mouseCartActions();
		}
	};

	if(options.updateCart)
		fns.updateCart();
	else if(onlyCart)
		fns.onlyCart();
	else
	{
		switch(options.method)
		{
			case 1:
				fns.buyButtons();
			break;
		}
		
		fns.loadCart();
		fns.mouseCartActions();
		options.callback();
	}
	return $this;
};