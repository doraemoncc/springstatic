/**
 * Entry of a module
 */
KISSY.add(function(S,InjectDom){
	return function(){
		new InjectDom();
	};
},{
	requires : ['./src/injectToDom']
});