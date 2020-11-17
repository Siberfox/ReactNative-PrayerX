export interface CardPreviewProps {
  item: {
    id: string;
    name: string;
    columnId: number;
    checked: boolean;
    subscribed: number;
    prayedByMe: number;
    prayedByOthers: number;
  };
}

export interface ColumnPreviewProps {
  title: string;
  id: number;
}

export interface CommentsItemProps {
  item: {
    id: string;
    cardId: string;
    name: string;
    text: string;
  };
}

export interface CommentsListProps {
  cardId: string;
}

export interface CustomButtonProps {
  text: string;
  action?: () => void;
}

export interface DescriptionListProps {
  prayedByMe: number;
  prayedByOthers: number;
}

export interface PrayersListProps {
  columnId: number;
}

export interface SubscribedListProps {
  columnId: number;
}

export type RootStackParamList = {
  Desk: undefined;
  Column: {columnId: number; columnName: string};
  Card: {
    cardId: string;
  };
  Auth: undefined;
};

export interface CardList {
  id: string;
  name: string;
  columnId: number;
  checked: boolean;
  subscribed: number;
  prayedByMe: number;
  prayedByOthers: number;
}

export interface CardsState {
  cards: CardList[];
  isLoading: boolean;
  error: string;
}

export interface ColumnsState {
  columns: {id: number; title: string; userId: number}[];
  isEdit: boolean;
  isLoading: boolean;
  error: string;
}

export interface CommentList {
  id: string;
  cardId: string;
  name: string;
  text: string;
}

export interface CommentsState {
  comments: CommentList[];
  isLoading: boolean;
  error: string;
}

export interface UserState {
  token: string;
  name: string;
  error: string;
  isLoading: boolean;
}
