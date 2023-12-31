import { useState } from 'react';
import { useAppDispatch, useFindHashtag } from '../../hooks';
import { changeNoteText, deleteNote } from '../../store/slice';

import { NoteProps } from '../../types';

import { IconButton, TextField, Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Delete, Edit, Save } from '@mui/icons-material';

export const NoteItem: React.FC<NoteProps> = (item) => {
  const [text, setText] = useState<string>(item.text);
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const hashtag: string = useFindHashtag(text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    dispatch(
      changeNoteText({
        id: item.id,
        text,
        hashtag: hashtag,
        active: item.active,
      }),
    );
    setEdit(!edit);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 1,
      }}
    >
      {edit ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            sx={{
              marginRight: 1,
            }}
            fullWidth
            variant="outlined"
            size="small"
            value={text}
            onChange={handleChange}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <IconButton onClick={handleSaveClick}>
              <Save fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography>{item.text}</Typography>
          <Box>
            <IconButton onClick={() => setEdit(!edit)}>
              <Edit fontSize="small" />
            </IconButton>
            <IconButton onClick={() => dispatch(deleteNote(item))}>
              <Delete fontSize="small" color="warning" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};
