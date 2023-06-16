import React, {forwardRef} from 'react'
import { TextField } from '@mui/material';

interface InputData {
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:InputData , ref) => {
  return (
    <TextField variant='outlined' margin='normal' inputRef={ref} fullWidth type='text' {...props}>
          
    </TextField>
  )
})

export default Input
