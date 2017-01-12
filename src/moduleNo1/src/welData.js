KISSY.add('moduleNo1/src/welData',function(S,JSON){
	function DataPre(){
		var _fw = 'Kissy Framework successfully loaded.';//var 私有,this可调用
		_fw += '<br />'+'BUI_basedonKissy Kit successfully loaded';
		var _count = 8*Math.ceil(10*Math.random())+5,
		 	_dcount = 0,
		 	_appreciate = '<i class="icon-heart"></i> 赞一下（'+ _count + '）',
		 	_disagree = '<i class="icon-off"></i> 踩一下（'+ _dcount + '）';
		
		var obj = {};
		var transData = {
				jsonObj : obj,
				preData : function(){
					this._dataPre();
					return this.jsonObj;
				},
				_dataPre : function(){
								//返回对象/对象数组
								//var jsonObjArr = [];
							//	jsonObjArr.push({"fw" : fw});
							//	jsonObjArr.push({"dcount":dcount});
							//	alert($.toJSON(obj));	
						//var jsonObj = {};
						
						this.jsonObj.fw = _fw;
						this.jsonObj.count = _count;
						this.jsonObj.dcount = _dcount;
						this.jsonObj.appreciate = _appreciate;
						this.jsonObj.disagree = _disagree;
							// return JSON.stringify(jsonObj);
				}
		};
		this.jsonObj = transData.preData();	

	}
	return DataPre;
	
},{
			//attach:true,
			requires:['json']
});




