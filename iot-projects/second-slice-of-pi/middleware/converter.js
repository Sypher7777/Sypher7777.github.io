const json2html = require('node-json2html');

module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		function converter(){
			if (req.result) {
				if (req.accepts('html')){
					let transform = 
					{'<>': 'div', 'html': [{'<>': 'p', 'html': [{'<>': 'b', 'html': 'name: '},
					
					{'<>': 'p', 'html': '${name}'}]},
					
					{'<>': 'p', 'html': [{'<>': 'b', 'html': 'description: '},
					
					{'<>': 'p', 'html': '${description}'}]},
					
					{'<>': 'p', 'html': [{'<>': 'b', 'html': 'value: '},
					
					{'<>': 'p', 'html': '${value}'}
				]}
		]};
				json2html.transform(req.result, transform)
				res.send()
				return
				}

			
			else{
				next()
			}
		}
	};
};
