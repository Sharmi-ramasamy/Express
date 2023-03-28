const express = require('express');
const app = express();
app.locals.email = 'aspire@gmail.com';
console.log(app.locals.email);

// // output : aspire@gmail.com



// const express = require('express');
// const app = express();
// app.locals.name = 'aspire';
// app.locals.domain = 'devops';
// app.locals.company = 'Aspire System';
// console.log(app.locals)

// [Object: null prototype] {
//     settings: {
//       'x-powered-by': true,
//       etag: 'weak',
//       'etag fn': [Function: generateETag],
//       env: 'development',
//       'query parser': 'extended',
//       'query parser fn': [Function: parseExtendedQueryString],
//       'subdomain offset': 2,
//       'trust proxy': false,
//       'trust proxy fn': [Function: trustNone],
//       view: [Function: View],
//       views: '/home/asplap3261/Desktop/Express/myapp/ExpressApplication/views',
//       'jsonp callback name': 'callback'
//     },
//     name: 'aspire',
//     domain: 'devops',
//     company: 'Aspire System'
//   }

