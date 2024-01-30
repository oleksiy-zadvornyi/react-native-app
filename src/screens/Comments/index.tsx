import React, {useEffect, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/hooks/reduxHook';
import {getPosts} from '@/store/posts/actions';
import {PostType} from '@/types/state';
import {Post} from '@/components';

import {getStyle} from './style';

const Posts = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(s => s.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const renderItem = ({item}: ListRenderItemInfo<PostType>) => {
    return <Post {...item} />;
  };

  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList<PostType>
        keyExtractor={item => item.id.toString()}
        data={posts.data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
};

export default Posts;
