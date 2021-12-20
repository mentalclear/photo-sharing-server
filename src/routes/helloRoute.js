import { MongoClient } from 'mongodb';

export const helloRoute = {
    method: 'get',
    path: '/hello',    
    handler: async (req, res) => {
        const user = req.user;
        res.send('Hello from /hello route!');
    }
};
