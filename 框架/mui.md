###MUI
#### 总结
1. 底部选项卡
- div模式
每个选项卡的内容需要写在一个div中（通过一个div模拟一个独立页面），当逻辑复杂，会导致DOM结构繁杂，响应缓慢，当系统复杂，需要下拉刷新时，推荐webview
- webview模式
每个选项卡之间是独立的，互不影响，比如下拉刷新时考虑。
- 地方
2. 的

####to solve
1. SPA模式（div底部选项卡）
2. 懒加载

####奇怪的部分
1.样式覆盖


####待研究的
1. 各mobile 框架对比
[实际app项目中，比较常用、成熟的针对html5的UI框架是哪些，优缺点如何？](https://www.zhihu.com/question/21906128)
2.[国产框架MUI跟ReactNative的对比帖](https://www.zhihu.com/question/39278015)
3. mui.init()

