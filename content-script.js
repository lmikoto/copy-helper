const commonPattern = /(\s*)\n作者[\s\S]*著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。[\s\S]*$/;
const config = [
	{
		url: 'segmentfault.com',
		pattern: commonPattern
	},
	{
		url: 'jianshu.com',
		pattern: commonPattern
	},
	{
		url: 'zhihu.com',
		pattern: commonPattern
	}
]

document.addEventListener("copy", async ()=>{
	for(c of config){
		if(window.location.href.indexOf(c.url) != -1){
			const text = await navigator.clipboard.readText();
			if(c.pattern.test(text)){
				const replace = text.replace(c.pattern,'');
				console.log(`to replace clipboard from ${text} to ${replace}`)
				await navigator.clipboard.writeText(replace);
			}
		}
	}
} );