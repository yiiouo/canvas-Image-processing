# 这是一个H5拍照，编辑图片，生成图片的DEMO

[demo](https://yiiouo.github.io/canvas-Image-processing/)，不过颜色选择器那里有问题，好像github没有设置跨域头，所以报错了。原本我是用webpack打包那张图片的，但是上传到github后，图片路径就报错了，所以现在还没解决。

使用了webpack进行文件处理，exif.js解决ios图片旋转问题，fastclick.js处理移动端点击延迟问题。

主要功能是，使用file，让用户可以拍照或者上传图片，然后在canvas显示出来，而且用户可以在canvas进行涂鸦，旋转笔触的粗细，颜色等。

我用了canvas的getImageData，写了一个移动端颜色选择器，不过有点瑕疵，没有了很多色，这个以后会进行更新的。

然后模拟了range，让用户可以更改笔触的粗细。

用户可以选择图片的缩放：适应，拉伸，填充，居中。

最后用了canvas的toDataURL生成图片，用户可以长按保存图片。

如果要传给后台的话，只需要把图片转成blod，再用formData上传。

**不能直接在本地打开，要开启服务器才行，因为图片跨域问题。**