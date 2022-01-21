import { ObjectId } from 'mongodb';
import { db } from './db';

export const sharePhotoWithUserByEmail =async (photoId, email) => {
    const connection = db.getConnection();
    const user = await connection.collection('users')
        .findOne({email});
    if (user) {
        await connection.collection('photos')
        .updateOne({_id: ObjectId(photoId)}, {
            $addToSet: {shredWith: user.id}
        });
    }
}
