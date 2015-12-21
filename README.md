# csv-transform-json #
A simple csv Transform json for nodejs

Due to caused by network, my library file can't publish to npm.
so you can clone this library.

```
git clone https://github.com/handoing/csv-transform-json
```

## Usage

``` js
var ctj = require('csv-transform-json');
/** 
 *	@version  v0.1.0
 *  @author   chen.han
 *  @param    String    get the contents of the file path
 *  @param    function  callback
 */
ctj('/static/user.csv', function(data) {
	console.log(data);
})
```
## License
MIT