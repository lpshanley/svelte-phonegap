# "hello phonegap" svelte template

A combination of the phonegap Hello World template and svelte templates

This is a project template for [Svelte](https://svelte.dev) apps using [Phonegap](https://phonegap.com/) It lives at https://github.com/lpshanley/svelte-phonegap.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit lpshanley/svelte-phonegap svelte-phonegap
cd svelte-phonegap
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Install the dependencies...

```bash
cd svelte-phonegap
npm install
```

...then start [Rollup](https://rollupjs.org) / [Phonegap](https://http://docs.phonegap.com/references/phonegap-cli/):

```bash
npm run dev
```

**NOTE** The first time you run `npm run dev` will take MUCH longer than any subsequent runs. Phonegap-cli needs to create the `\platforms` and `\plugins` directories in your project. You will know that your project is ready once you start see a load of output from your console. Note that this can take 5-10 minutes depending on your PC and connection speed. On the first run you will see phonegap put out an error that says `The "path" argument must the of type string....` ignore this as this is because the project is still building the `platforms` and `plugins` just allow it time to build. 

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and watch your changes update automatically.

## [config.xml][config-xml]

#### android-minSdkVersion (Android only)

Minimum SDK version supported on the target device. Maximum version is blank by default.

This template sets the minimum to `14`.

    <preference name="android-minSdkVersion" value="14" />

#### &lt;access ...&gt; (All)

This template defaults to wide open access.

    <access origin="*" />

It is strongly encouraged that you restrict access to external resources in your application before releasing to production.

For more information on whitelist configuration, see the [Cordova Whitelist Guide][cordova-whitelist-guide] and the [Cordova Whitelist Plugin documentation][cordova-plugin-whitelist]

## [www/index.html][index-html]

#### Content Security Policy (CSP)

The default CSP is similarly open:

    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *" />

Much like the access tag above, you are strongly encouraged to use a more restrictive CSP in production.

A good starting point declaration might be:

    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: 'unsafe-inline' https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *" />

For more information on the Content Security Policy, see the [section on CSP in the Cordova Whitelist Plugin documentation][cordova-plugin-whitelist-csp].

Another good resource for generating a good CSP declaration is [CSP is Awesome][csp-is-awesome]


[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com

## Deploying

This section is currently untested. Because svelte builds the needed files on compile deploying this should follow any standard phonegap deployment process.