```
<img className="logo" src={require("../../../images/taxi.png")}/>
<img className="logo" src={require({imageUrls[index]})}/>
```


```
        var overlayStyle = {
            position: "fixed",
            left:0,
            top:0,
            zIndex: 5,
            width: "100%",
            height: "100%",
            border:"1px solid red",
            backgroundColor:"#fff",
            opcity:"0.6"
        };
```

```
        /*
        //category:{id: "01",name:"快车"}
        var that = this; //attention for this!!
        var lis = this.props.data.map(function(category,index){
            //pathname+category.categoryId+
            //http://localhost/monitor/category/05?city=%E5%85%A8%E5%9B%BD&interval=60000&time=2016-04-29
            //<Link to={{pathname:url_path,query:url_query}}>{category.name}</Link>
            var url_path = "/monitor/category/"+category.id;
            var url_query = {city:that.state.city,time:that.state.time,interval:that.state.interval};

            var queryParams = [];
            for (var d in url_query)
                queryParams.push(encodeURIComponent(d) + "=" + encodeURIComponent(url_query[d]));
            var queryStr = queryParams.join("&");


            return (
                    <li key = {category.id}>
                        <a href = {url_path+"?"+queryStr} >{category.name}</a>
                    </li>);
        });
        */
```

```
// React.findDomNode(this.refs.popupPage).setAttribute("display","none");
```



        // switch(e.currentTarget.dataset.type){
        //  case

        // }


<Overlay customerStyle={styles.overlay}/>
                    <Datepicker customerStyle={styles.datePicker} chosenDate = {this.state.chosenDate} onDateChange={this.handleDateChange}/>

webpack-dev-server --color --hot --progress --display-error-details && 
,
    "dev": "webpack-dev-server --color --hot --progress --display-error-details && NODE_ENV = dev node ./server.js"


    /*

                <Month chosenDate={this.props.chosenDate} updateChosenDate = {this.props.onDateChange}/>
                */



render:function(){
        return (
            <div ref="grid" className={this.getClassName()} onClick={this.updateDate}>{this.props.value}</div>
            )
    }