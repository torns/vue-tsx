/* 离线地图API V2.1 接口文件
 * 发布: http://www.xiaoguo123.com/p/baidumap_offline_v21
 * 网页中只需要加载此JS文件即可
 * 百度地图图片即瓦片文件请自行下载，或联系(QQ群 616816128 验证：百度地图API)
 * 研究学习之用，禁止用于商业用途！
 * 最后修改日期: 2017-12-04
 */

// eslint-disable-next-line no-var
var offmapcfg = {
  imgext: '.png', // 瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg
  tiles_dir: config.map.baidu_offline_loadUrl, // 普通瓦片图的地址，为空默认在 offlineemap/tiles/ 目录
  tiles_hybrid: './static/offlineMap/sateTiles', // 卫星瓦片图的地址，为空默认在 offlineemap/tiles_hybrid/ 目录
  tiles_self: '', // 自定义图层的地址，为空默认在 offlineemap/tiles_self/ 目录
  home: config.map.baidu_offline_home, // 自定义图层的地址，为空默认在 offlineemap/tiles_self/ 目录
};
