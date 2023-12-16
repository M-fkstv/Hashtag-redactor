import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteState, Note } from '../types';

const initialState: NoteState = {
  list: [],
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.list.push({
        text: action.payload.text,
        hashtag: action.payload.hashtag,
        id: new Date().toISOString(),
        active: action.payload.active,
      });
    },
    deleteNote(state, action: PayloadAction<Note>) {
      state.list = state.list.filter((note) => note.id !== action.payload.id);
    },
    changeNoteText: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.list.findIndex(
        (note) => note.id === action.payload.id,
      );
      state.list[noteIndex].text = action.payload.text;
      state.list[noteIndex].hashtag = action.payload.hashtag;
    },
    setActiveTag: (state, action: PayloadAction<Note>) => {
      const tag = state.list.find((item) => item.id === action.payload.id);
      if (tag) {
        tag.active = !tag.active;
      }
    },
  },
});

export const { addNote, deleteNote, changeNoteText, setActiveTag } =
  noteSlice.actions;

export const noteReducer = noteSlice.reducer;
