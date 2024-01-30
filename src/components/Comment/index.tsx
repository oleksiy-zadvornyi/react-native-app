import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {CommentType} from '@/types/state';
import {DeleteSvg} from '@/assets/svg';

import {getStyle} from './style';

type Props = CommentType & {
  onPressDelete: (id: string) => void;
};

const Comment = ({onPressDelete, ...props}: Props) => {
  const styles = useMemo(() => getStyle(), []);

  const handleDelete = () => onPressDelete(props.id);

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.text} numberOfLines={1}>
          {props.text}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <DeleteSvg />
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
