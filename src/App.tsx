import { useState } from 'react';

import { useAppDispatch, useAppSelector } from './assets/hooks';
import { addNote } from './assets/store/slice';

import { Stack, Typography } from '@mui/material';

import { Form } from './assets/components/Form/Form';
import { NoteList } from './assets/components/NoteList/NoteList';
import { Note } from './assets/types';

import './App.css';
import { Hashtags } from './assets/components/Hashtag/Hashtag';

export const App: React.FC = () => {
  const [note, setNote] = useState<Note>({
    text: '',
    hashtag: '',
    id: '',
    active: false,
  });
  const dispath = useAppDispatch();

  const noteList = useAppSelector(
    (state: { note: { list: Note[] } }) => state.note?.list,
  );

  const tagList = noteList.reduce((acc: Note[], note) => {
    if (!acc.find((item) => item.hashtag === note.hashtag)) {
      acc.push(note);
    }
    return acc;
  }, []);

  const filteredList = noteList.filter((item1) =>
    tagList
      .filter((item) => item.active)
      .some((item2) => item1.hashtag === item2.hashtag),
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(addNote(note));

    setNote({ text: '', hashtag: '', id: '', active: false });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hashtag: string = e.target.value.includes('#')
      ? e.target.value.substring(e.target.value.indexOf('#'))
      : '';
    setNote({ ...note, text: e.target.value, hashtag: hashtag });
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Hashtag redactor
      </Typography>
      <Form onChange={onChange} onSubmit={onSubmit} text={note.text} />
      {filteredList.length
        ? filteredList && <NoteList noteList={filteredList} />
        : noteList && <NoteList noteList={noteList} />}

      {noteList && (
        <Stack direction="row" spacing={1}>
          {tagList.map((item, index) => {
            if (item.hashtag) {
              return <Hashtags key={index} item={item} />;
            }
          })}
        </Stack>
      )}
    </>
  );
};
