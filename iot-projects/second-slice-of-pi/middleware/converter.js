const json2html = require('node-json2html');

module.exports = function() {
		// TODO 2: Create the converter function
		return function converter(req, res, next){
											console.log("sanity?")
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
				let ht = json2html.transform(req.result, transform)
								console.log("something else")

				res.send(ht)
				return
				}

			else{
				console.log("anything")
				res.send(req.result);
				}

		}			
		else{
			console.log("tuus mater")
				next()
			}
	}
};
