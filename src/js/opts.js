// 将对象存储在内存中
const oCan = document.getElementById('canvas'), // 获取画布
  ctx = oCan.getContext('2d'),
  oShowImg = document.getElementById('lastImg'), // 最终生成的图片
  oMsg = document.querySelector('.msg'),
  oZhezhao = document.querySelector('.zhezhao'),
  oRevoke = document.getElementById('revoke') // 撤销按钮  

// 公共方法
function showLoading(type) {
  oZhezhao.style.display = type
  oMsg.style.display = type
}

export default {
  // 对象
  oCan: oCan,
  ctx: ctx,
  oShowImg: oShowImg,
  oMsg: oMsg,
  oZhezhao: oZhezhao,
  oRevoke: oRevoke,
  // 方法
  showLoading: showLoading,
  isDraw: false, // 能否涂鸦
  isNewPic: true, // 是否新的图片
  isStopPrevent: true, // 是否阻止全局默认事件
  data: {},
  imgData: {},
  // 兼容写法
  transform: (obj, data) => {
    obj.style.WebkitTransform = data
    obj.style.transform = data
  }
}
