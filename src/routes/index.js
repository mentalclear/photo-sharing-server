import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getSharedWithMePhotosRoute } from './getSharedWithMePhotosRoute';
import { uploadPhotoRoute } from './uploadPhotoRoute';

export { protectRouteMiddleware } from "./protectRouteMiddleware";
export const routes = [
    getMyPhotosRoute,
    getSharedWithMePhotosRoute,
    uploadPhotoRoute,
];
