# csv-transform-json #
A simple csv Transform json for nodejs

```
npm install csv-transform-json
```

## Usage

``` js
var ctj = require('csv-transform-json');
/** 
 *	@version v1.0.0
 *  @author chen.han
 *  @param String    get the contents of the file path
 *  @param function  callback
 */
ctj('/static/user.csv', function(data) {
	console.log(data);
})
```
## License
MIT