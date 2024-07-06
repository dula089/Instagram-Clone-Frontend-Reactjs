import React, { useState } from "react";
import "./Table.css";
import { calculateGPA } from "../utils/gpaUtil";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const marks = [
  {
    Module: "Software Development I (IIT Sri Lanka)",
    credit: 20,
    mark: 64,
    status: "Passed",
  },
  {
    Module: "Mathematics for Computing (IIT Sri Lanka)",
    credit: 20,
    mark: 85,
    status: "Passed",
  },
  {
    Module: "Trends in Computer Science (IIT Sri Lanka)",
    credit: 20,
    mark: 62,
    status: "Passed",
  },
  {
    Module: "Computer Systems Fundamentals (IIT Sri Lanka)",
    credit: 20,
    mark: 88,
    status: "Passed",
  },
  {
    Module: "Software Development II (IIT Sri Lanka)",
    credit: 20,
    mark: 33,
    status: "Condone Pass",
  },
  {
    Module: "Web Design and Development (IIT Sri Lanka)	",
    credit: 20,
    mark: 68,
    status: "Passed",
  },
];

function Table() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [gpa] = useState(calculateGPA(marks));

  return (
    <div className="table">
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Credit</th>
            <th>Mark</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
       
          {marks.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Module}</td>
                <td>{val.credit}</td>
                <td>{val.mark}</td>
                <td>{val.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <div className="gpa">
        <p>Your GPA is : {gpa}</p>
      </div>
    </div>
  );
}
export default Table;
