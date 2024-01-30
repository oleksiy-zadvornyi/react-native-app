import React, {useEffect, useMemo, useState} from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Comment} from '@/components';
import {PostProps} from '@/types/navigation';
import {CommentType} from '@/types/state';
import {
  deleteCommentsById,
  getCommentsByPostId,
  postCommentsByPostId,
} from '@/store/comments/actions';
import {useAppDispatch, useAppSelector} from '@/hooks/reduxHook';

import {getStyle} from './style';

const Post = (props: PostProps) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const comments = useAppSelector(s => s.comments);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(getCommentsByPostId(props.route.params.id));
  }, [dispatch, props.route.params.id]);

  const handleDelete = (id: string) => {
    dispatch(deleteCommentsById(id));
  };

  const handleSend = async () => {
    await dispatch(
      postCommentsByPostId({postId: props.route.params.id, text: comment}),
    );
    setComment('');
  };

  const renderItem = ({item}: ListRenderItemInfo<CommentType>) => {
    return <Comment {...item} onPressDelete={handleDelete} />;
  };

  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.title}</Text>
      <Text style={styles.body}>{props.route.params.body}</Text>
      <FlatList<CommentType>
        keyExtractor={item => item.id}
        data={comments.data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          value={comment}
          returnKeyType="send"
          onSubmitEditing={handleSend}
          onChangeText={setComment}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

export default Post;
