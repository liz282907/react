/* import moment from "moment";
moment.locale("zh-cn",{
	months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
	weekdays:["日","一","二","三","四","五","六"]
});

*/



//get how many days in a month
function getDayCountsOfMonth(d){
	var curMonth = d.getMonth();
	d.setMonth(curMonth+1,0);
	return d.getDate();
}
function getDayCountOfLastMonth(d){
	d.setMonth(d.getMonth(),0);
	return d.getDate();
}

function getFirstDayOfMonth(d){
	return new Date(d.getFullYear(), d.getMonth(),1);
}

function getLastDayOfMonth(d){
	return new Date(d.getFullYear(), d.getMonth(),getDayCountsOfMonth(d));
}

function getDayDictOfMonth(d){
	var initialDate = d.getDate();
	var daysArr = [];
	var dayNumArr = [];
	for(var i=1;i<=getDayArrayOfMonth(d);i++){
		var newDate = new Date(d.getFullYear(),d.getMonth,i);
		daysArr.push(newDate);
		dayNumArr.push(i);
	}
	//getDay: 0:sunday
	var firstDay = getFirstDayOfMonth(d).getDay();
	var lastDay = getLastDayOfMonth(d).getDay();


	for(var j=0;j<firstDay;j++){
		daysArr.unshift(d.setDate(getDayCountOfLastMonth(d)-j));
		dayNumArr.unshift(getDayCountOfLastMonth(d)-j);
	}
	d.setDate(initialDate);

	for(var j=1;j<=(6-lastDay);j++){
		daysArr.push(new Date(d.getFullYear(),(d.getMonth()+1),j));
		dayNumArr.push(j);
	}

	// return daysArr;
	return dayNumArr;
}


export{getDayDictOfMonth,getDayCountsOfMonth};