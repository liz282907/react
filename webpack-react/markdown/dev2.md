1.切图选择 
![](http://i4.buimg.com/652c35b5b167d1ca.png)
jpg是不透明的，png支持透明，色彩不太丰富时png8(如小的iconfont那样的)，png24支持半透明
裁切快捷键：alt+i+R

2.雪碧图 |url
- gulp-css-spriter（生成雪碧图）和gulp-css-base64（直接变成base64）
- 对于较小的图片，当在css中引用url的时候，webpack 的url-loader会直接将它转为base64编码的。就不需要发送请求了。类似于内嵌的文字。

3.移动端像素、适配
物理像素 = 设备独立像素(设备宽高)*设备像素比（dpr:device pixel ratio）

![](http://i3.buimg.com/2c234abd4dfcdb32.png)

关于为什么对于retina屏幕，位图设计稿要*2，是因为：首先，位图像素（图片的最小数据单元）与物理像素一一对应时，图片才能清楚显示，

![](http://i2.buimg.com/f11456021d9d1032.png)
retina屏幕，一个位图像素需要四个物理像素（宽高都算了），但这个时候现有的图片中物理像素不能满足要求，它只能就近取色，取周边的颜色进行填充，会导致上图的效果。但是如果视觉稿以*2给出，那么每个位图像素都有一一对应的物理像素，就可以清晰显示。

4.placeholder center 
```
::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
```


###待考虑
1.雪碧图 or url
2.

###说明
1.暂时使用png24
