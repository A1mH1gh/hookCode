var BASE_ADDRESS = Module.findBaseAddress('TEST')

var Frida_detect = BASE_ADDRESS.add('0x2bb9e0')
var Intergrity_detect = BASE_ADDRESS.add('0x28f50')

Interceptor.replace(Frida_detect, new NativeCallback(function() {
    console.log('\nFUN_1002bb9e0 now replaced. lost its original functionality')
},'void',[]))
Interceptor.replace(Intergrity_detect, new NativeCallback(function() {
    console.log('\nFUN_100028f50 now replaced. lost its original functionality')
},'void',[]))

Interceptor.attach(Frida_detect, {
    onEnter(args) {
        console.log('\nFUN_1002bb9e0 entered')
    }
})
Interceptor.attach(Intergrity_detect, {
    onEnter(args) {
        console.log('\nFUN_100028f50 entered')
    }
})

