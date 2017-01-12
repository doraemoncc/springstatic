KISSY.add('moduleNo2/src/createTree',function(S,Tree,Data,List,Tooltip){
		function createTree(){
			
			S.DOM.html('#tst','按钮显示出来，证明KISSY默认加载core');
			var Event = S.Event;
			Event.on('#tst',{
				'click':{
						fn:function(ev){
							console.log('core模块成功自动加载: '+ev.type+'事件成功，设置事件只生效一次，目标id: '+ev.target.id);
						}
						//once:true
				}
			});
			//树的节点
			//用this声明的为该类的成员，可以在类外实例化调用
			this.data = [ 
			            {text : '测试UI控件',id : '1',expanded : true, children: [
		                     {text : '子节点',id : '11'},
		                     {text : '子节点',id : '12'},
		                     {text : '子节点',id : '13',expanded : true,children:[
		                                                        {text : '孙子节点',id : '131'},
		                                                        {text : '孙子节点',id : '132'},
		                                                        {text : '孙子节点',id : '133'},
		                                                        {text : '孙子节点',id : '134'},
		                                                        {text : '孙子节点',id : '135'}
		                      ]}
			            ]}
			          ];
			this.store = new Data.TreeStore({
		        map : {
		          text : 'text',
		          id : 'id',
		          children : 'children'
		        },
		        root : {
		        	text:'测试用户界面树',
		        	id:'buiRoot',
		        	expanded : true,
		        	children : this.data
		        }
		      });
			this.tree = new Tree.TreeList({
		        render : '#t1',
		        store : this.store,
		        showRoot : true,
		        showLine : true,
		        height:300
		      });
		    this.tree.render();
		      
		      var t2 = new Tooltip.Tip({
		          trigger : '#t1 ul li',
		          alignType : 'right',
		          offset : 10,
		          title : '右边的提示信息',
		          elCls : 'tips tips-success',
		          titleTpl : '<span class="x-icon x-icon-small x-icon-success"><i class="icon icon-white icon-question"></i></span>'+
		          '<div class="tips-content">{title}</div>'
		        });
		        t2.render();	
		
			
		}
		return createTree;

},{
		//attach:false,
		requires : ['bui/tree','bui/data','bui/list','bui/tooltip','../moduleNo2.css']
});