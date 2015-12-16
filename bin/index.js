var peek = require('peek-stream'),
    ldjson = require('ldjson-stream'),
    csv = require('csv-parser'),
    fs = require('fs');

var isCSV = function(data) {
    return data.toString().indexOf(',') > -1
}

var isJSON = function(data) {
    try {
        JSON.parse(data)
        return true
    } catch (err) {
        return false
    }
}

var parser = (function() {
    return peek(function(data, swap) {
        if (isJSON(data)) return swap(null, ldjson())
        if (isCSV(data)) return swap(null, csv())
        swap(new Error('No parser available'))
    })
})();

// @version v0.1.0
// @author chen.han
// @param String    get the contents of the file path
// @param function  callback

var csvTransformJson = function(fileName, callback) {
    var data = fs.readFileSync(fileName, "utf-8");
    parser.write(data);
    parser.on('data', function(data) {
        callback && callback(JSON.stringify(data));
    })
}

module.exports = csvTransformJson;
