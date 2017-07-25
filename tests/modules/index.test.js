'use strict';

const tape = require('tape');
const shot = require('shot');
const router = require('../../modules');
//
// tape('Filename is not a string', t => {
//   shot.inject(
//     router,
//     {
//       method: 'POST',
//       url: '/submit',
//       payload: {
//         filename: 12,
//         contents: {name: 'example', age: 4, body: 'example'}
//       }
//     },
//     res => {
//       t.equal(res.statusCode, 400, res.payload);
//       t.end();
//     }
//   );
// });
//
// tape('Example correct request', t => {
//   shot.inject(
//     router,
//     {
//       method: 'POST',
//       url: '/submit',
//       payload: {
//         filename: 'filename',
//         contents: {name: 'example', age: 4, body: 'example'}
//       }
//     },
//     res => {
//       t.equal(res.statusCode, 200, res.payload);
//       t.end();
//     }
//   );
// });

// tape('Too long filename', t => {
//   shot.inject(
//     router,
//     {
//       method: 'POST',
//       url: '/submit',
//       payload: {
//         filename: 'filenamejfqoehfnvcoqeljnfvopqhgnvpoqwlnvpnpqlengohvbnqa',
//         contents: {name: 'example', age: 4, body: 'example'}
//       }
//     },
//     res => {
//       t.equal(res.statusCode, 400, res.payload);
//       t.end();
//     }
//   );
// });
