//  frida -U -f kr.co.nicevan.apppos.ios -l Enum_Methods.js

if(ObjC.available){
    var classname = "MerchantInfoDownloadViewController"
    var methods = ObjC.classes[classname].$ownMethods
    for(var i=0;i<methods.length;i++){
        console.log(methods[i])
    }
}