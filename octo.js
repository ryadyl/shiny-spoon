globalThis.onmessage=function(e){console.log("I have recieved a message."); console.log("Here it is!"); console.log(e); globalThis.x=e.source; console.log(globalThis.x);};
