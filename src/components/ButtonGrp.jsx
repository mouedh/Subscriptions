import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';

export default function ButtonGrp() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <IconButton aria-label="view" size="small" onClick="{handleOpen}">
        <InsertDriveFileIcon fontSize="small" />
        <h6 style={{ margin: '0 5px' }}>View</h6>
      </IconButton>
      <IconButton aria-label="edit" size="small" onClick="{handleOpen}">
        <EditIcon fontSize="small" />
        <h6 style={{ margin: '0 5px' }}>Edit</h6>
      </IconButton>
    </ButtonGroup>
  );
}
