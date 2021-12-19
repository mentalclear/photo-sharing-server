const USER_ID_1 = 'sy6yWHz49LcfKGtDIKFTEsADeGB3';
const USER_ID_2 = 'zUAR17A7ogPx9hcrl8wjB6y9Ve42';
const USER_ID_3 = 'JXYosTIKhrhXHiTBzstTv4Qkz3G2';

module.exports.users = [{
    id: USER_ID_1,
    email: 'mentalclear+user01@gmail.com',
    fullName: 'Brenda Brown',
}, {
    id: USER_ID_2,
    email: 'mentalclear+user02@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_3,
    email: 'mentalclear+user03@gmail.com',
    fullName: 'Jane Jones',
}];

module.exports.photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];