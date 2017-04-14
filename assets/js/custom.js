// JavaScript Document
(function init(){
	getElById('dashboard').innerHTML = $.session.get('name')+' Dashboard'
})();
