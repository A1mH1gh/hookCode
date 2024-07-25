//  frida -U -f kr.co.nicevan.apppos.ios -l Enum_Classes.js

if(ObjC.available){
    for(var classname in ObjC.classes){
        console.log(classname)
    }
}