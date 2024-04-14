// module.exports = ({ env }) => ({
//     upload: {
//         config: {
//             provider: 'local',
//             providerOptions: {
//                 sizeLimit: 250 * 1024 * 1024,
//             },
//         },
//     },
// });


module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});