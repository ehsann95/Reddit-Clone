import { atom } from "recoil";
import { Timestamp } from "firebase/firestore";

export type Post = {
  id?: string;
  communityId: string;
  creatorDisplayName: string;
  communityImageURL?: string;
  creatorId: string;
  title: string;
  body: string;
  numberOfComments: number;
  voteStatus: number;
  imageURL?: string;
  createdAt: Timestamp;
  userDisplayText: string;
  currentUserVoteStatus?: {
    id: string;
    voteValue: number;
  };
  postIdx?: number;
  editedAt?: Timestamp;
};

export type PostVote = {
  id: string;
  postId: string;
  communityId: string;
  voteValue: number;
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
  postVotes: PostVote[];
}

export const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
  postVotes: [],
};

export const postState = atom({
  key: "postState",
  default: defaultPostState,
});
