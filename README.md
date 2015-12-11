# csv-transform-json #
A simple csv Transform json for nodejs

```
npm install csv-transform-json
```

## Usage

``` js
var ctj = require('csv-transform-json');
ctj('/static/user.csv', function(data) {
	console.log(data);
})
```
## License
MIT