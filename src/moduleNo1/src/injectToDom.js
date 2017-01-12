KISSY.add('moduleNo1/src/injectToDom',function(S,DOM,Event,DataPre){
		function InjectDom(){
			var tDataPre = new DataPre();
			tDataPre = tDataPre.jsonObj;
			
				S.DOM.html('#kissy',tDataPre.fw);
				S.DOM.html('#testKissyListening',tDataPre.appreciate);
				S.DOM.html('#disagree',tDataPre.disagree);
						
				var Event = S.Event;
				Event.add('#testKissyListening','click',function(ev){
					//alert('触发了KissyFrame: '+ev.type+'事件，目标id: '+ev.target.id);
//					this.remove('#testKissyListening','click');
					S.DOM.get('#kissy');
                    tDataPre.count++;
					tDataPre.appreciate = '<i class="icon-heart"></i> 赞一下（'+ tDataPre.count + '）';
					S.DOM.html('#testKissyListening',tDataPre.appreciate);
				});
				Event.add('#disagree','click',function(ev){
                    tDataPre.count++;
					tDataPre.disagree = '<i class="icon-off"></i> 踩一下（'+ tDataPre.dcount + '）';
					S.DOM.html('#disagree',tDataPre.disagree);
					
				});
			
		}
		return InjectDom;

},{
		//attach:false,
		requires : ['dom','event','./welData']
});