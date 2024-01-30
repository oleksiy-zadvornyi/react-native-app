import {StackScreenProps} from '@react-navigation/stack';
import {PostType} from './state';

export type StackParamList = {
  Posts: undefined;
  AddPost: undefined;
  EditPost: PostType;
  Post: PostType;
  Comments: {
    postId: string;
  };
};

export type PostsProps = StackScreenProps<StackParamList, 'Posts'>;
export type AddPostProps = StackScreenProps<StackParamList, 'AddPost'>;
export type EditPostProps = StackScreenProps<StackParamList, 'EditPost'>;
export type PostProps = StackScreenProps<StackParamList, 'Post'>;
export type CommentsProps = StackScreenProps<StackParamList, 'Comments'>;
