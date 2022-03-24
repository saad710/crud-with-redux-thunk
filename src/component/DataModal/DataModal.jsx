import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { addFrontEndUser } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const DataModal = (props) => {
  const { rowData, action, setAction, open, setOpen,user } = props;
  const dispatch = useDispatch();
  const { register, handleSubmit,reset } = useForm();

  //   const onSubmit = data => console.log(data);
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data)
    action === "Add" ? submitHandler(data) : updateHandler(data);
  };

  const submitHandler = (data) => {
    console.log("submit")
    console.log(data)
    const userData = Object.assign({...data,id:user.length + 1})
    // console.log(userData)
    dispatch(addFrontEndUser(userData))
    setOpen(false)
    reset({name:"",username:"",email:""})
  }

  const updateHandler = (data) => {
      console.log("update")
      console.log(data)
      reset({name:"",username:"",email:""})
  }
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>{action}</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="standard"
              placeholder="user name"
              sx={{ padding: 2 }}
              {...register("username")}
            />
            <TextField
              variant="standard"
              placeholder="name"
              sx={{ padding: 2 }}
              {...register("name")}
            />
            <TextField
              variant="standard"
              placeholder="email"
              sx={{ padding: 2 }}
              {...register("email")}
            />
            <br />
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DataModal;