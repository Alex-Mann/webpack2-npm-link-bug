Background: /lib is where my local 'modules' folder is. These are modules that are not tied to the lambda function but are linked with `npm link`

Following Apex structure of lambda's, src is the containing dir for the "project" as per Apex.

Error can be found in the bundle: `/src/functions/hello/lib/index.js` line 263

Steps to reproduce:

1. cd to /lib/mailer
2. `npm install` then `npm run build`
3. `npm link` to globally link the mailer module
4. cd to `/`, `npm link mailer` to link the module
5. cd to `/src/functions/hello` to simulate the builder before deployment in apex
6. `../../../node_modules/.bin/webpack --config ../../../webpack.config.babel.js --display-error-details --bail --progress` to run webpack.
7. Now go check `/src/functions/hello/lib/index.js` (this is where the compiled js should be after webpack bundles it up)
8. Find 'webpackMissingModule() on line 263' - I cannot get rid of this error, for some reason webpack will not link it with the postmark client...

My whole goal is to use webpack as a nice bundling utility before I upload lambda functions with apex. Due to being mainly a solo developer I want to use npm link to show realtime changes to any modules I create, but right now I cannot get webpack to link in my symlinks.

Any help is much appreciated!
