export interface IPostsState {
  data: PostType[];
  loading: boolean;
}

export interface PostRequestType {
  title: string;
  body: string;
}

export interface PostType extends PostRequestType {
  id: string;
}

export interface ICommentsState {
  data: CommentType[];
  loading: boolean;
}

export interface CommentRequestType {
  postId: string;
  text: string;
}

export interface CommentType extends CommentRequestType {
  id: string;
}
