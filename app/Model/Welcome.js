const _ = require('lodash')

exports.default = class Welcome {

    static quote () {

        let quotes = [
			'Turn your ideas into reality instantly!',
			'It\'s never too late to try Haluka!',
			'Discover the essence of a beautiful framework!',
			'Love the way you code!',
			'If Einstein were alive, he would use Haluka Framework!'
		];

		return _.sample(quotes)

    }

}