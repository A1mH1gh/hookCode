var realBase = Module.findBaseAddress('TEST');//IPA 이름
console.log('시작 주소 : ' + realBase);

var offset = '0x2bbdf4';
console.log('상대 주소 : ' + offset);

var hookAddress = realBase.add(offset);
console.log('후킹 주소 : ' + hookAddress);

Interceptor.attach(hookAddress, {
	onEnter: function(args) {
		console.log('후킹 주소 레지스터 값 : ');
		console.log(JSON.stringify(this.context));

        //this.context.x0 = 0x0;
		//console.log('\n변조 결과 : ');
		//console.log(JSON.stringify(this.context));
	}
});