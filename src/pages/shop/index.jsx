import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';

import Menu from '../../components/Menu';
import { useShop } from '../../context/shop';
import { useStyles } from './styles';


export default function Shop() {
  const { productsShop, setProductsShop } = useShop();
  const classes = useStyles();
  const [newList, setNewList] = useState([]);

  function excluir(l) {
    const auxList = productsShop.filter(item => item.id !== l);

    setProductsShop(auxList);
  }

  const diminuir = (id) => {

    const product = productsShop.find(product => product.id === id);
    product.qtde = product.qtde + 1;

    setProductsShop(prevProductsShop => {
      return [...new Set([...prevProductsShop, product])];
    })
    console.log(productsShop);
  }

const [ amount, setAmount ] = useState([])

  return (
    <div>
      <Menu />
      <div className={classes.tabelaExt} style={productsShop.length === 0 ? { display: 'none' } : { display: 'flex' }}>
        <TableContainer component={Paper} className={classes.tabela}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell><strong>PRODUTO</strong></TableCell>
                <TableCell align="center"><strong>DESCRIÇÃO</strong></TableCell>
                <TableCell align="center"><strong>PREÇO UNIT</strong></TableCell>
                <TableCell align="center"><strong>QTDE</strong></TableCell>
                <TableCell align="right"><strong>TOTAL</strong></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tabelaCorpo">
              {productsShop.map(row => (
                <TableRow
                  key={row.id}
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.valueFormatted}</TableCell>
                  <TableCell>
                    <div className={classes.controls} style={{display: 'flex', flex: 'row', alignItems: "center", justifyContent: 'center'}}>
                      <IconButton onClick={ () => diminuir(row.id)}>
                        <RemoveIcon />
                      </IconButton>

                      <Typography>
                        {row.qtde}
                      </Typography>

                      {/* <IconButton onClick={() => { diminuir(index); }}>
                        <AddIcon />
                      </IconButton> */}
                    </div>
                  </TableCell>
                  <TableCell align="center"><Button onClick={() => excluir(row.id)}><ClearIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={productsShop.length === 0 ? { display: 'flex' } : { display: 'none' }} className={classes.semProduto}>
        <h1>Você ainda não adicionou nenhum produto</h1>
      </div>
    </div>
  );
}
