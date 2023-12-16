import { Box } from '@mui/material';
import { NoteListProps } from '../../types';
import { NoteItem } from '../Note/Note';

export const NoteList: React.FC<NoteListProps> = ({ noteList }) => {
  return (
    <Box
      sx={{
        p: 1,
        maxHeight: 350,
        overflowY: 'auto',
      }}
    >
      {noteList.map((item, index) => {
        return <NoteItem key={index} {...item} />;
      })}
    </Box>
  );
};
