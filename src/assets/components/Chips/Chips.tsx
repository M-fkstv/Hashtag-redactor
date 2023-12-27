import { Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveTag } from '../../store/slice';
import { Note } from '../../types';
import React from 'react';

interface HashtagProps {
  item: Note;
}

export const Hashtags: React.FC<HashtagProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.note.list).find(
    (note) => note.id === item.id,
  )?.active;

  const setActiveHashtag = () => {
    dispatch(setActiveTag(item));
  };

  return (
    <Chip
      onClick={setActiveHashtag}
      clickable
      variant={active ? 'filled' : 'outlined'}
      label={item.hashtag}
    />
  );
};
