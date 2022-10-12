module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,jpg,mp4,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};