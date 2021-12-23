import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getSharedWithMePhotosRoute } from './getSharedWithMePhotosRoute';

export { protectRouteMiddleware } from "./protectRouteMiddleware";
export const routes = [
    getMyPhotosRoute,
    getSharedWithMePhotosRoute,
];
