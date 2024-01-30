import React, {useMemo, useState} from 'react';
import {Button, TextInput, View} from 'react-native';

import {AddPostProps} from '@/types/navigation';
import {useAppDispatch} from '@/hooks/reduxHook';
import {postPosts} from '@/store/posts/actions';

import {getStyle} from './style';

const AddPost = (props: AddPostProps) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = async () => {
    await dispatch(postPosts({title, body}));
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
      />
      <Button title="Add new post" onPress={handleAddPost} />
    </View>
  );
};

export default AddPost;
