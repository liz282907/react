##tips
react组件中主要包括四种属性：props,state,ref,key

- 其中props与state的区别在于props是（recommended）不可变的,自上而下由父节点传给子节点的（确切的说应该是从属关系中的owner->owned，单向数据传递）。而state主要涉及的是UI交互导致的数据更新变换等。
- ref用于取得真实dom节点，以供取得数据、调用方法（eg.focus()）等
- key用于给子节点局部唯一的次序，以解决diff两个子节点时可能遇到的一些问题，比如insertBefore需求，到底是直接删除还是更新删除等

其他笔记...
#### 1. ref
```
var myComponent = ReactDOM.render(<MyComponent />, myContainer);
```

- <MyComponent />返回的是一个ReactElement

(是由React.createClass({..})创建的，等同于React.createElement(tagName/componentName,props,childNodes).)

- ReactDOM.render返回的是virtual dom element,是不能直接用该dom node的各种属性方法的（比如value值、focused()等），当需要访问真正的实例时，只需给render返回的dom node加入ref属性.
ref属性可以为回调函数，也可以仅仅为标识该ele的string。

    如果是回调的话，当组件 once mounted，就会被立刻执行。like this:
```
盗图
render: function() {
    return (
      <TextInput
        ref={function(input) {
          if (input != null) {
            input.focus();
          }
        }} />
    );
  },
```

if string: 

常用于 owner对owned组件属性、方法的调用，向子节点传递消息等。（this.refs.myTextInput会返回真实DOM node,底层是用ReactDOM.
findDOMNode去查找，且只针对mounted dom有效）

```
var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});
```

- in any cases，尽量考虑props和state，从owner->owned的传递，数据流可以实现，owner想使用owned的属性可以考虑在高层定义state，通过state的变化去操作，而尽量不要直接通过ref去访问。


#### 2. this.state

setState() 并不立刻改变state的值(因此调用后有可能仍然获取的是上一个状态的值)，会创建一个针对state变化的transition。

**Q1：选择哪些数据作为state?**
>让我们分析每一项，指出哪一个是 state 。简单地对每一项数据提出三个问题：

> 1. 是否是从父级通过 props 传入的？如果是，可能不是 state 。
> 2. 是否会随着时间改变？如果不是，可能不是 state 。
> 3. 能根据组件中其它 state 数据或者 props 计算出来吗？如果是，就不是 state 。

**Q2：选择哪个组件来拥有state属性**

>对于应用中的每一个 state 数据：
>   
>   - 找出每一个基于那个 state 渲染界面的组件。
>   
>   - 找出共同的祖先组件（某个单个的组件，在组件树中位于需要这个 state 的所有组件的上面）。
>   - 要么是共同的祖先组件，要么是另外一个在组件树中位于更高层级的组件应该拥有这个 state 。
>   - 如果找不出拥有这个 state 数据模型的合适的组件，创建一个新的组件来维护这个 state ，然后添加到组件树中，层级位于所有共同拥有者组件的上面。


#### 3. component的生命周期： 
will,did,   | Mount,unMount,update 各种组合

 \+ componentWillReceiveProps(object nextProps)

 \+ shouldComponentUpdate(object nextProps, object nextState)

注意使用场景（服务端or客户端）,何时调用（插入前or后or更新）

eg.
componentWillMount

服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。如果在这个方法内调用 setState，render() 将会感知到更新后的 state，将会执行仅一次，尽管 state 改变了。

componentDidMount
在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。


#### 4. react声称快速的原因

>React 设计目标：使 API 看起来就像每一次有数据更新的时候，整个应用重新渲染了一样。

原本操作DOM慢-》virtual dom中通过下面的diff方法计算需要更新的dom，将这部分写入真正dom，以避免频繁操作dom。

两个节点的差异检查（Pair-wise diff）并更新

- 当节点类型不一样的时候，直接删除创建

- 当节点类型一致，但子属性不一样的时候，remove and add (用key来辨别顺序)

- 当 自定义类型的时候，认为是同一个组件，只需根据新的props，在之前的组件实例上调用 component[Will/Did]ReceiveProps()去更新属性即可。

因为操作的虚拟DOM是内存数据，性能很高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的

####5. prop
