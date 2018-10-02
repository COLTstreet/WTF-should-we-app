// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAMXhT3vaktixzLH2f1l-leGD-kBEnpvxk',
    authDomain: 'wtf-shouldwe.firebaseapp.com',
    databaseURL: "https://wtf-shouldwe.firebaseio.com",
    projectId: "wtf-shouldwe",
    storageBucket: "wtf-shouldwe.appspot.com",
    messagingSenderId: "828508860753"
  }
};
