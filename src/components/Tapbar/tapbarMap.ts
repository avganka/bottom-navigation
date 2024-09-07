import { ReactElement } from 'react';
import { ShareAction, PageUpAction, CommentsAction, LikesAction } from './actions';

export type Action = 'share' | 'pageUp' | 'likes' | 'comments';

export const actionsMap: Record<Action, () => ReactElement> = {
  share: ShareAction,
  pageUp: PageUpAction,
  likes: LikesAction,
  comments: CommentsAction
};
