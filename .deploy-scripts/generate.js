const fs = require('fs');

const shops = [
	{
		slug: 'shop1',
		domains: ['shop1.com'],
		regions: ['bru'],
	},
	{
		slug: 'shop2',
		domains: ['shop2.com'],
		regions: ['all'],
	},
];

const defaultTemplateData = fs.readFileSync(process.env.PWD + '/now.json');
const defaultTemplate = JSON.parse(defaultTemplateData);
const scripts = [];
const allScripts = [];

shops.forEach(shop => {
	const shopJson = {
		...defaultTemplate,
		name: defaultTemplate.name + '-' + shop.slug,
		regions: shop.regions,
		alias: shop.domains,
		build: {
			env: {
				SHOP_SLUG: shop.slug,
			},
		},
	};

	const shopJsonData = JSON.stringify(shopJson, null, 2);
	fs.writeFileSync(process.env.PWD + '/.deploy-scripts/now-' + shop.slug + '.json', shopJsonData);
	console.log('WRITING: now-' + shop.slug + '.json');
	scripts.push('"deploy-' + shop.slug + '": "now -A ./.deploy-scripts/now-' + shop.slug + '.json"');
	allScripts.push('npm run deploy-' + shop.slug);
});

console.log('\n\n##### DEPLOYMENT SCRIPTS ######');
console.log('\n - Copy this to package.json\n');

console.log(scripts.join(',\n') + ',');
console.log('"deploy-all": "' + allScripts.join(' && ') + '"');
