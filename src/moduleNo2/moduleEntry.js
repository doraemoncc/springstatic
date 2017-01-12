/**
 * Entry of a module
 */
KISSY.add(function(S,Create){
	return function(){
		new Create();
	};
},{
	requires : ['./src/createTree']
});