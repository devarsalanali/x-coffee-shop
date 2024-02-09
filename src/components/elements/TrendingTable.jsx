import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import sampleNft from '../../assets/images/sample-nft.png'
const rows = [
  {
    rank: '1',
    name: (
      <div className='imagebox'>
        <img src={sampleNft} alt='' />
        <span>Collection Name</span>
      </div>
    ),
    creator: 'Creator Name',
    price: '1 ETH',
  },
  {
    rank: '1',
    name: (
      <div className='imagebox'>
        <img src={sampleNft} alt='' />
        <span>Collection Name</span>
      </div>
    ),
    creator: 'Creator Name',
    price: '1 ETH',
  },
  {
    rank: '1',
    name: (
      <div className='imagebox'>
        <img src={sampleNft} alt='' />
        <span>Collection Name</span>
      </div>
    ),
    creator: 'Creator Name',
    price: '1 ETH',
  },
  {
    rank: '1',
    name: (
      <div className='imagebox'>
        <img src={sampleNft} alt='' />
        <span>Collection Name</span>
      </div>
    ),
    creator: 'Creator Name',
    price: '1 ETH',
  },
]

export const TrendingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead className='table-head'>
          <TableRow className='table-head__Row'>
            <TableCell className='table-head__Cell'>Rank</TableCell>
            <TableCell className='table-head__Cell' align='left'>
              Name
            </TableCell>
            <TableCell className='table-head__Cell' align='left'>
              Creator
            </TableCell>
            <TableCell className='table-head__Cell' align='left'>
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {rows.map((row, index) => (
            <TableRow
              className='table-body__Row'
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component='th'
                scope='row'
                className='table-body__Cell'
              >
                {row.rank}
              </TableCell>
              <TableCell align='left' className='table-body__Cell'>
                {row.name}
              </TableCell>
              <TableCell align='left' className='table-body__Cell'>
                {row.creator}
              </TableCell>
              <TableCell align='left' className='table-body__Cell'>
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
