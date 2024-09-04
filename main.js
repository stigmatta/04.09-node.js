var fileStream = require('./FileStream');

var obj = new fileStream.FileStream();

obj.on('read', obj.ReadFile.bind(obj));
obj.on('write', obj.WriteFile.bind(obj));

obj.emit('read');  
obj.emit('write');
