/**
 * @fileoverview 
 * @author m47<mizukixiaohan@gmail.com>
 * @module kload
 **/
KISSY.add(function(S,IO,Node){
	/**
	 * 传入css选择器以及目标URL
	 * 实现异步刷新页面
	 */
	var self = this;

	function KLoad(selector,url) {
		IO.get(url, null, function() {
	
			Node.all(selector).html(arguments[0], true);
	
		}, 'html');

	}
	return KLoad;
	
}, {
	requires : [
	            'io',
	            'node'
	            ]
});