import { Button, FormControl, FormGroup, TextField } from '@mui/material';

import { FormProps } from '../../types';

export const Form: React.FC<FormProps> = ({ onSubmit, onChange, text }) => {
  return (
    <FormControl
      sx={{
        marginBottom: 1,
      }}
      component="form"
      variant="standard"
      onSubmit={onSubmit}
    >
      <FormGroup row>
        <TextField
          sx={{
            width: '350px',
            marginRight: 1,
          }}
          name="hashtag"
          label="Enter your message"
          variant="outlined"
          size="small"
          value={text}
          onChange={onChange}
          required
        />
        <Button variant="outlined" size="small" type="submit" color="inherit">
          Submit
        </Button>
      </FormGroup>
    </FormControl>
  );
};
