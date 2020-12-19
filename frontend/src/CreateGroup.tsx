import React from 'react';
import { Button, TextField } from '@material-ui/core';

export const CreateGroupButton = <Button>Create a group</Button>

export const CreateGroupForm = () => {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Group name"
          defaultValue=""
          variant="outlined"
        />
      </div>
    </form>
  );
}

export default CreateGroupForm;

