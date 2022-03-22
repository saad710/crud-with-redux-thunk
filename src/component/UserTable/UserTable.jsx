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
import { fetchRecord } from '../../redux/action/action';

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
  const user = useSelector((state) => state.userDataReducer?.userData)

  React.useEffect(() => {
    dispatch(fetchRecord());
    console.log("test");
    console.log(user);
  }, [dispatch,user]);
 
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


  const users = useSelector((state) => state.userDataReducer?.userData);
  console.log(users)
  


    return (
        <TableContainer component={Paper} sx={{width:"90%",margin:4}}>
        {/* <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
      </TableContainer>
    );
};

export default UserTable;