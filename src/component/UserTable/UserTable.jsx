import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteUser, fetchRecord } from '../../redux/action/action';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const UserTable = () => {
 
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);

  const user = useSelector((state) => state.UserReducer?.userData)
  console.log(user)
 
  // React.useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://jsonplaceholder.typicode.com/users`,
  //       )
  //       // setConversation(res?.data)
    
  //     // conversation.push(res.data)
  //     console.log(res.data)
  //     dispatch({type:'fetch-userData', payload : res.data })
  //       // setCurrentChat(res?.data[0])
       
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchUserData()
  // },[])


  


    return (
        <TableContainer component={Paper} sx={{width:"90%",margin:4}}>
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
            {
              user.length > 0 &&
              (user?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined"  onClick={() => dispatch(deleteUser(row.id))}> Delete </Button>
                  </TableCell>
                </TableRow>
              )))
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default UserTable;