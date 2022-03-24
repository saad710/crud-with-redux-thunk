import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchRecord } from "../../redux/action/action";
import { Button } from "@mui/material";
import DataModal from "../DataModal/DataModal";

const UserTable = () => {
  const [action, setAction] = React.useState("");
  const [rowData, setRowData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  // console.log(action)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);

  const user = useSelector((state) => state.UserReducer?.userData);
  console.log(user);

  // const handleOpen = () => setOpen(true);

  const handleAdd = (row) => {
    setAction("Add");
    setRowData(row);
    setOpen(true);
  };

  const handleEdit = (row) => {
    console.log(row)
    setAction("Edit");
    setRowData(row);
    setOpen(true);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleAdd} sx={{ marginLeft:4,marginTop:2  }}>
        Add User Data
      </Button>
      <br/>
      <TableContainer component={Paper} sx={{ width: "90%", margin: 4}}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.length > 0 &&
              user?.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      onClick={() => handleEdit(row)}
                      sx={{ marginLeft: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ marginLeft: 1 }}
                      onClick={() => dispatch(deleteUser(row.id))}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DataModal
        rowData={rowData}
        action={action}
        setAction={setAction}
        open={open}
        setOpen={setOpen}
        user={user}
      />
    </>
  );
};

export default UserTable;
