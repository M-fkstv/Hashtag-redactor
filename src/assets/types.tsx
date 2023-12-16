export type Note = {
  text: string;
  hashtag: string;
  id: string;
  active: boolean;
};

export interface NoteState {
  list: Note[];
}

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

export interface NoteListProps {
  noteList: Note[];
}

export interface NoteProps {
  active: boolean;
  text: string;
  hashtag: string;
  id: string;
}
