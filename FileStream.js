var evt = require('events');

function FileStream() {

    this.ReadFile = function() {
        console.log('файл прочитан');
    };

    this.WriteFile = function() {
        console.log('файл записан');
    };
}

FileStream.prototype = new evt.EventEmitter();

module.exports.FileStream = FileStream;
