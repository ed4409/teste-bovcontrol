





    // '/healthcheck': {
    //   get: {
    //     tags: ['Health Check'],
    //     description: '',
    //     parameters: [],
    //     responses: {
    //       200: {
    //         description: 'OK'
    //       },
    //       500: {
    //         description: 'Internal Server Error'
    //       }
    //     }
    //   }
    // }
// '/v1/fazendeiro': {
//     post: {
//       summary: 'Cadastro de Fazendeiro',
//       description: 'Cadastro de Fazendeiro com e-mail, idade e telefone.',
//       tags: ['Cadastro de Fazendeiro'],
//       parameters: [
//         {
//           in: 'header',
//           name: 'Authorization',
//           description: 'User token',
//           required: true
//         },
//         {
//           in: 'body',
//           name: 'body',
//           description: 'Cadastro de fazendeiro.',
//           required: true,
//           schema: {
//             type: 'object',
//             properties: {
//               email: {
//                 type: 'string',
//                 format: 'email',
//                 required: true
//               },
//               idade: {
//                 type: 'integer',
//                 minimum: 0,
//                 required: true
//               },
//               telefone: {
//                 type: 'string',
//                 required: true
//               }
//             }
//           }
//         }
//       ],
//       responses: {
//         200: {
//           description: 'Fazendeiro cadastrado com sucesso.'
//         },
//         401: {
//           description: 'Token inválido ou expirado'
//         },
//         400: {
//           description: 'Parâmetros inválidos.'
//         },
//         422: {
//           description: 'Fazendeiro já cadastrado'
//         },
//         500: {
//           description: 'Erro interno no servidor'
//         }
//       }
//     }
//   }
  