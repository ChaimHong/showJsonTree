function showJsonTree() {
			var indent = "++"
			var lines = [];

			var node = function(prefix, key, value) {
				console.log(prefix, key, value,value.constructor);
				if( value && value.constructor == Array ) {
					lines.push( prefix+key );		

					for (var i=0; i < value.length; i++)
						node(prefix+indent, i, value[i]);

				}else if( value && typeof value == 'object' ) {
					lines.push(prefix + key + ":");

					for(var key in value) node(prefix + indent, key, value[key]);

				}else{
					lines.push(prefix + key + ":" + value);
				};
			};

			if( typeof data == 'object' ) node('', '', data);

			return lines.join("<br />");
};
