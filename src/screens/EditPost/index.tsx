import React, {useMemo, useState} from 'react';
import {Button, TextInput, View} from 'react-native';

import {EditPostProps} from '@/types/navigation';
import {useAppDispatch} from '@/hooks/reduxHook';
import {putPosts} from '@/store/posts/actions';

import {getStyle} from './style';

const EditPost = (props: EditPostProps) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(props.route.params.title);
  const [body, setBody] = useState(props.route.params.body);

  const handleUpdatePost = async () => {
    await dispatch(putPosts({id: props.route.params.id, title, body}));
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
      <Button title="Update post" onPress={handleUpdatePost} />
    </View>
  );
};

export default EditPost;
