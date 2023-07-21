import { useEffect, useCallback } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../modules/postWrite';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { shopname, region, sort, username, address, content, imgurl, id } = useSelector(({ PostWrtite }) => ({
        id: PostWrtite.id,
        shopname: PostWrtite.shopname,
        region: PostWrtite.region,
        sort: PostWrtite.sort,
        username: PostWrtite.username,
        address: PostWrtite.address,
        content: PostWrtite.content,
        imgurl: PostWrtite.imgurl,
    }));

    const onChangField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return (
        <Post
            onChangField={onChangField}
            id={id}
            shopname={shopname}
            region={region}
            sort={sort}
            username={username}
            address={address}
            content={content}
            imgurl={imgurl}
        />
    );
};

export default EditorContainer;
