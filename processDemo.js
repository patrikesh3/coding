console.log(process.argv);
console.log(process.argv[3]);
// process.env
console.log(process.env.COMPUTERNAME);
//console.log(process.env.LOGNAME)
// pid()
console.log(process.pid);
// cwd()
console.log(process.cwd());
// memoryUsage()
console.log(process.memoryUsage());
// update()
console.log(process.uptime());
process.on('exit', (code) =>{
    console.log(`About to exit the: ${code}`);
})
// exit()
process.exit(3);
console.log('job')
