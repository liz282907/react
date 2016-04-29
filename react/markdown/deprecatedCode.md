1. app render
```
return(
            <div>
                <ul>
                    <li><Link to="/monitor/category/01">快车</Link></li>
                    <li><Link to="/monitor/category/02">出租车</Link></li>
                    <li><Link to="/monitor/category/03">专车</Link></li>
                    <li><Link to="/monitor/category/04">其他检测项</Link></li>

                    <li><a href="/monitor/category/01">快车</a></li>
                    <li><Link to="/monitor/category/02">出租车</Link></li>
                    <li><Link to="/monitor/category/03">专车</Link></li>
                    <li><Link to="/monitor/category/04">其他检测项</Link></li>
                </ul>
                { /* this.props.children */}
            </div>

```
