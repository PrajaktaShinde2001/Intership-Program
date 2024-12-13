const os = require('os') // import os module from npm, it is build in module

console.log("Cpu architecture :" +os.arch()) // return cpu architecture

console.log("Free memory :" +os.freemem())

console.log("Total memeory :" +os.totalmem())

console.log("Hostname :" +os.hostname())

console.log("operating system name" +os.type())

console.log("Operating sysytem platform" +os.platform())

console.log("os release :" +os.release())

console.log("os default directory for temp files :" +os.tmpdir())