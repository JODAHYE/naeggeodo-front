import { MessageDataType } from '../../hooks/useChat';

export type ChattingRoomInfoRequest = {
  chattingRoomId: string;
};

export type ChattingRoomInfoResponse = {
  imgPath: string;
  link: string | null;
  title: string;
  maxCount: number;
  currentCount: number;
  chatUser: string[];
  endDate: null;
  id: number;
  state: string;
  place: string;
  address: string;
  category: string;
  dealHistory: null;
  user: null;
  createDate: Date;
};

export type ChattingSubmitBody = {
  sender: string;
  contents: string;
  chatMain_id: string;
  type: string;
};

export type PreviousChattingListRequest = {
  chattingRoomId: string;
  userId: string;
};

export type PreviousChattingItem = {
  chatMain_id: number;
  contents: string;
  id?: number;
  idx?: number;
  regDate: string;
  type: any;
  user_id: string;
};

export type PreviousChattingListResponse = {
  messages: PreviousChattingItem[];
};

export type UserId = {
  userId: string;
};

type QuickChatting = {
  msg: string;
  idx: number;
};

export type QuickChattingListResponse = {
  quickChat: QuickChatting[];
  user_id: string;
};

export type CurrentChatUser = {
  user_id: string;
  idx: number;
  remittanceState: 'N' | 'Y';
};

export type CurrentChatUserListResponse = { users: CurrentChatUser[] };
