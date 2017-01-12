/**
 * 包配置config.js，规范模块声明，同时便于跑测试引包模块。或可为测试环节单独配置config_testOnly.js
 * 
 */
KISSY.config({
		/* 开启自动 combo 模式
	    combine:true,
	     kissy 库内置模块的时间戳
	    tag:'2012',
		 kissy 的基准路径
		 base:'http://x.com/a',
		 */
		'packages':{
			//define an module which is named with ...
			moduleNo1: {
				//开启后调用的是未压缩的文件
				debug:true,
				tag: '20140522',
				base : './src',
				combine:false
			},
			//define an module which is named with ...
			moduleNo2: {
				//开启后调用的是未压缩的文件
				debug:true,
				tag: '20140522',
				base : './src',
				combine:false
			}


		}
});