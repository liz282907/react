//指标定义的格式（特别是detail-description）

var fieldData = {
					"title":"快车成交量",
					description:"当前分钟完成的实时订单量，按照订单完成时间统计。",
					detail_description:"1.完成（order_status 变为5）<br>2.实时订单（type=0）<br>3.排除测试单（channel !=1）<br> 4.排除培训单（channel !=1010000001）",
					"statics1":[
									{
										"name":"累计值",
										"value":"438,775"
									},
									{
										"name":"当前值",
										"value":"7,080"
									},
									{
										"name":"预估值",
										"value":"38,775"
									}
								],
					"statics2":[
									{
										"name":"平均值",
										"value":"4,407"
									},
									{
										"name":"最高值",
										"value":"7,080"
									},
									{
										"name":"最低值",
										"value":"4,407"
									}
								]
				}

export {fieldData};