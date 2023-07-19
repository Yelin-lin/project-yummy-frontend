import client from './client';

export const writePost = ({ shopname, id, region, sort, address, content, imgurl, username, writes }) =>
    client.post('/api/posts', { shopname, id, region, sort, address, content, imgurl, username, writes });

// export const readPosts = id => client.get(`/api/posts/${id}`);
