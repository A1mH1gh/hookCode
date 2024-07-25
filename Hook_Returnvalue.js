//  frida -U -f kr.co.nicevan.apppos.ios -l hook.js

if(ObjC.available){
    var classname = "MerchantInfoDownloadViewController"
    var method = "sendPacket:"
    var hook = ObjC.classes[classname][method]

    Interceptor.attach(hook.implementation, {
        onLeave: function(retval){
            console.log("[*] Class Name :        "+classname)
            console.log("[*] Method Name :       "+method)
            console.log("[*] Type of RETURN value :       "+hook.returnType)
            console.log("[*] Return Value :         "+retval)
        
            var new_retval = ptr("0x01")
            retval.replace(new_retval)
        }
    })
} 
