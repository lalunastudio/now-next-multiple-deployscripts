# Multiple Deployment Script for Next.js and Now v2

I made this small test repo, I wanted to share, because I have +30 webshops running on the same codebase, 
and needed to be able to deploy.

First of all, I needed a new way to handle cookies - I used cookie-parser with custom express server, but this 
way of doing things has been depricated in Now v2.

The only thing thats seperate my shops is an ENV var called "SHOP_SLUG". So I needed a way to deploy multiple sites.

It's not as smart as I would like it to be, but for now it will manage.

## How to

First install

`$ npm install`

Then modify shops array to fit your needs in the `./deploy-scripts/generate.js` file. 

Then run the generate scripts:

`$ npm run generate-deployments`

This will output something like:

```
##### DEPLOYMENT SCRIPTS ######

 - Copy this to package.json

"deploy-shop1": "now -A ./.deploy-scripts/now-shop1.json",
"deploy-shop2": "now -A ./.deploy-scripts/now-shop2.json",
"deploy-all": "npm run deploy-shop1 && npm run deploy-shop2"
```

Copy the 3 lines into the scripts section inside package.json

Then you can run either a single deployment eg:

`$ npm run deploy-shop1`

Or deploy all: 

`$ npm run deploy-all`

Hopefully we never get a shop called "all"... then we have a problem ;)


## Contribuate
Feel free to contribuate if we can make this smarter :)





