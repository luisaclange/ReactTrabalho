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

import Menu from '../../components/Menu';
import { useShop } from '../../context/shop';
import { useStyles } from './styles';


export default function Shop() {
  const { productsShop, setProductsShop } = useShop();
  const classes = useStyles();

  function excluir(l) {
    var tabela = document.getElementById('tabelaCorpo');
    var linha = document.getElementById(l);
    tabela.removeChild(linha);
    var nova = {};
    var aux = 0;
    for (let i = 0; i < productsShop.length; i++) {
      if (productsShop[i].id !== l) {
        nova[aux] = productsShop[i];
        aux++;
      }
    }
    console.log(nova);
  }

  return (
    <div>
      <Menu />
      <div className={classes.tabelaExt} style={productsShop.length == 0 ? { display: 'none' } : { display: 'flex' }}>
        <TableContainer component={Paper} className={classes.tabela}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>PRODUTO</TableCell>
                <TableCell align="right">DESCRIÇÃO</TableCell>
                {/* <TableCell align="right">QUANTIDADE</TableCell> */}
                <TableCell align="right">PREÇO UNIT</TableCell>
                {/* <TableCell align="right">TOTAL</TableCell> */}
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tabelaCorpo">
              {productsShop.map((row) => (
                <TableRow
                  id={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.valueFormatted}</TableCell>
                  <TableCell align="right"><Button onClick={() => excluir(row.id)}><ClearIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={productsShop.length == 0 ? { display: 'flex' } : { display: 'none' }} className={classes.semProduto}>
        <h1>Você ainda não adicionou nenhum produto</h1>
      </div>
    </div>
  );
}
