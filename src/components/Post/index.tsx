import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {PostType} from '@/types/state';
import {DeleteSvg, EditSvg} from '@/assets/svg';

import {getStyle} from './style';

type Props = PostType & {
  onPress: (val: PostType) => void;
  onPressEdit: (val: PostType) => void;
  onPressDelete: (id: string) => void;
};

const Post = ({onPress, onPressEdit, onPressDelete, ...props}: Props) => {
  const styles = useMemo(() => getStyle(), []);

  const handlePress = () => onPress(props);
  const handleEdit = () => onPressEdit(props);
  const handleDelete = () => onPressDelete(props.id);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.wrap}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.body} numberOfLines={3}>
          {props.body}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <EditSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <DeleteSvg />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Post;
