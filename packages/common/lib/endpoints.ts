interface Endpoints {
	production: Record<string, string>;
	sandbox: Record<string, string>;
}

export const endpoints: Endpoints = {
	production: {
		'us-east-1':
			'https://sellingpartnerapi-na.amazon.com',
		'eu-west-1':
			'https://sellingpartnerapi-eu.amazon.com',
		'us-west-2':
			'https://sellingpartnerapi-fe.amazon.com'
	},
	sandbox: {
		'us-east-1':
			'https://sandbox.sellingpartnerapi-na.amazon.com',
		'eu-west-1':
			'https://sandbox.sellingpartnerapi-eu.amazon.com',
		'us-west-2':
			'https://sandbox.sellingpartnerapi-fe.amazon.com'
	}
}
