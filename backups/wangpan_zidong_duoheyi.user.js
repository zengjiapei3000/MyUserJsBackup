// ==UserScript==
// @name         【网盘】 自动点击 【多合一】
// @description  百度网盘 秒传 单文件\多文件 阿里云盘无提取码
// @author       xgxg38
// @match        *://pan.baidu.com/*
// @match        *://www.aliyundrive.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @run-at       document-idle
// @grant        GM_addStyle
// @version      0.1.3
// @namespace    https://greasyfork.org/users/757346
// ==/UserScript==


//待添加:自选择键、开关按钮//

//秒传链接//

    function MCLJ(){
    document.querySelector("body > div.swal2-container.swal2-center.swal2-noanimation > div > div.swal2-actions > button.swal2-confirm.swal2-styled").click();
}
setTimeout(MCLJ,500)


//地址可能会因为[秒传链接提取]插件的更新而改变//

//一个文件//
  function YGWJ(){
document.querySelector("#layoutMain > div.frame-content > div.module-share-header > div > div.slide-show-right > div > div > div.x-button-box > a:nth-child(4) > span").click();

}
setTimeout(YGWJ,500)
//多个文件//
function DGWJ(){
    document.querySelector("#shareqr > div.KPDwCE > div.QxJxtg > div > ul.QAfdwP.tvPMvPb > li.fufHyA.yfHIsP > div").click();
   document.querySelector("#bd-main > div > div.module-share-header > div > div.slide-show-right > div > div > div.x-button-box > a:nth-child(4) > span > span").click();
}
setTimeout(DGWJ,500)
//待添加:填入提取码后刷新//
//阿里云盘的第一步//
function DYB(){
    document.querySelector("#root > div > div > div.content--cklK- > div > div.node-list--1F7Np > div > div:nth-child(1) > div > div.top-element-wrapper--1iOwf > div > header > div.right-wrapper--2iGEp > button").click();
}
//延迟可能出现问题  就改大//
setTimeout(DYB,1000)
//第二步//
function DEB(){

    document.querySelector("body > div:nth-child(12) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > div > button.button--2Aa4u.primary--3AJe5.small---B8mi").click();
        window.open("ALYP://",'_blank')
}
setTimeout(DEB,2500)
//已添加:打开阿里云盘//
//待添加:并下载//



