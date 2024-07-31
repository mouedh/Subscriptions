import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ButtonSelect() {
  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    telephone: '',
    selectOption: '',
    date: null,
    montant: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  return (
    <div className="button-container1">
          <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel>Select </InputLabel>
        <Select
                name="selectOption"
                value={formData.selectOption}
                onChange={handleChange}
                label="Select Option"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Karate</MenuItem>
                <MenuItem value="option2">Physique cardio mixte</MenuItem>
                <MenuItem value="option3">Cours femme</MenuItem>
                <MenuItem value="option4">Kick boxing</MenuItem>
                <MenuItem value="option5">Gymnastique kids</MenuItem>
                <MenuItem value="option6">Musculation</MenuItem>
              </Select>
      </FormControl>
    </Box>
    </div>

  );
}
