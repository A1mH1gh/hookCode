//  frida -U -f kr.co.nicevan.apppos.ios -l hook.js

var realBase = Module.findBaseAddress('kr.co.nicevan.apppos.ios')
console.log(realBase)

var func_address = realBase.add('0x0000A1')
console.log(func_address)

Interceptor.attach(func_address, {
    onEnter: function(args){
        //변조 전
        console.log(JSON.stringify(this.context))
        
        //변조 전
        this.context.x0 = 0x1
        console.log(JSON.stringify(this.context))
    }
})
