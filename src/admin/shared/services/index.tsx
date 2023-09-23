import { getFetchClient } from "@strapi/helper-plugin";
const { get, post } = getFetchClient();

export const getClient = get;
export const postClient = post;
