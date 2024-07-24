var exit = Module.findExportByName('libSystem.B.dylib', 'exit');

var realBase = Module.findBaseAddress('TEST'); //IPA 이름
console.log('시작 주소 : ' + realBase);

Interceptor.attach(exit, {
    onEnter: function (args) {
        console.log("[*] exit Call");
        console.log('\tBacktrace:\n\t' + Thread.backtrace(this.context,
            Backtracer.ACCURATE).map(DebugSymbol.fromAddress)
            .join('\n\t'));
    },
    onLeave: function (retval) {
    }
});