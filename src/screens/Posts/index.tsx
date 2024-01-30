import React, {useEffect, useMemo} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/hooks/reduxHook';
import {deletePosts, getPosts} from '@/store/posts/actions';
import {PostType} from '@/types/state';
import {PostsProps} from '@/types/navigation';
import {AddSvg} from '@/assets/svg';
import {Post} from '@/components';

import {getStyle} from './style';

const Posts = (props: PostsProps) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(s => s.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleAdd = () => props.navigation.navigate('AddPost');
  const handleDelete = (id: string) => dispatch(deletePosts(id));

  const handlePress = (post: PostType) =>
    props.navigation.navigate('Post', post);

  const handleEdit = (post: PostType) =>
    props.navigation.navigate('EditPost', post);

  const renderItem = ({item}: ListRenderItemInfo<PostType>) => {
    return (
      <Post
        {...item}
        onPress={handlePress}
        onPressEdit={handleEdit}
        onPressDelete={handleDelete}
      />
    );
  };

  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList<PostType>
        keyExtractor={item => item.id}
        data={posts.data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <AddSvg />
      </TouchableOpacity>
    </View>
  );
};

export default Posts;
