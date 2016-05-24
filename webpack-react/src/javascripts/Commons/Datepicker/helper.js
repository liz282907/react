/* import moment from "moment";
moment.locale("zh-cn",{
	months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
	weekdays:["日","一","二","三","四","五","六"]
});

*/



//get how many days in a month
function getDayCountsOfMonth(d){
	var temp = new Date(d.getFullYear(),d.getMonth(),d.getDate());
	temp.setMonth(d.getMonth()+1,0);
	return temp.getDate();
}
function getDayCountOfLastMonth(d){
	var temp = new Date(d.getFullYear(),d.getMonth(),d.getDate());
	temp.setMonth(d.getMonth(),0);
	return temp.getDate();
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
	for(var i=1;i<=getDayCountsOfMonth(d);i++){         //change1
		var newDate = new Date(d.getFullYear(),d.getMonth(),i);
		daysArr.push(newDate);
		dayNumArr.push(i);
	}
	//getDay: 0:sunday
	var firstDay = getFirstDayOfMonth(d).getDay();
	var lastDay = getLastDayOfMonth(d).getDay();


	for(var j=0;j<firstDay;j++){
		//d.setDate(getDayCountOfLastMonth(d)-j)
		daysArr.unshift(new Date(d.getFullYear(),d.getMonth()-1,getDayCountOfLastMonth(d)-j));
		dayNumArr.unshift(getDayCountOfLastMonth(d)-j);
	}
	d.setDate(initialDate);

	for(var j=1;j<=(6-lastDay);j++){
		//考虑12月
		daysArr.push(new Date(d.getFullYear(),(d.getMonth()+1)%11,j));
		dayNumArr.push(j);
	}

	// return daysArr;
	return dayNumArr;
}
function cloneDate(d){
	return new Date(d.getFullYear(),d.getMonth(),d.getDate());
}
function validDateInMonth(base,date,startDate,endDate){
	base.setDate(date);
	if(base<startDate ||base>endDate)
		return false;
	else return true;
}


export{getDayDictOfMonth,getDayCountsOfMonth,cloneDate,validDateInMonth};