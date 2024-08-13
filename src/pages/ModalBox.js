import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import useModalContext from "../components/ModalContext";

function ModalBox() {
  const {
    open,
    handleOpen,
    handleClose,
    handleChange,
    formData,
    handleDateChange,
  } = useModalContext();
  console.log(open);
  return (
    <div>
      <div className="button-container">
        <Button variant="contained" onClick={handleOpen}>
          + create new
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleChange}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
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
            <TextField
              margin="normal"
              fullWidth
              label="Prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Téléphone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Montant"
              name="montant"
              type="number"
              value={formData.montant}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Valider
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalBox;
