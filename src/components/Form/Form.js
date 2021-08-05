import React from "react";
import { FormControl,InputLabel, Input, TextField, TextFieldLable ,Button} from '@material-ui/core';

const Form = () => {
  return (
    <section>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Title</InputLabel>
          <Input id="title" name='title'/>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Body</InputLabel>
          <Input id="body" name='body' />
        </FormControl>
        <br />
      
        <Button variant="contained" color="primary" m="2rem">Submit</Button>
      </form>
    </section>
  );
};

export default Form;
