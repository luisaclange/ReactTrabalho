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
import { FormatCurrency } from "../../utils/formatCurrency";
import { useNavigate } from 'react-router';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Menu from '../../components/Menu';
import { useShop } from '../../context/shop';
import { useStyles } from './styles';


export default function Shop() {
  const { productsShop, setProductsShop } = useShop();
  const [total, settotal] = React.useState(productsShop.reduce((a,v) =>  a += v.value * v.qtde , 0 ));
  const classes = useStyles();
  const navigation = useNavigate();

  // useEffect( async () => {
  //   settotal(productsShop.reduce((a,v) =>  a += v.value * v.qtde, 0 ));
  // }, [productsShop]);

  const navigateHome = () => {
    navigation('/')
  }

  function excluir(id) {
    const product = productsShop.find(product => product.id === id); 
    settotal(total - product.value * product.qtde);
    const auxList = productsShop.filter(item => item.id !== id);

    setProductsShop(auxList);
  }

  const aumentar = (id) => {

    const product = productsShop.find(product => product.id === id);
    product.qtde = product.qtde + 1;
    settotal(total + product.value);

    setProductsShop(prevProductsShop => {
      return [...new Set([...prevProductsShop, product])];
    }) 
  }

  const diminuir = (id) => {

    const product = productsShop.find(product => product.id === id);
    product.qtde = product.qtde - 1;
    settotal(total - product.value);

    setProductsShop(prevProductsShop => {
      return [...new Set([...prevProductsShop, product])];
    })
  }



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }







  return (
    <div>
      <Menu />
      <div className={classes.tabelaExt} style={productsShop.length === 0 ? { display: 'none' } : { display: 'flex', flexDirection: 'column' }}>
        <TableContainer component={Paper} className={classes.tabela}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell><strong>PRODUTO</strong></TableCell>
                <TableCell align="center" ><strong>DESCRIÇÃO</strong></TableCell>
                <TableCell align="center"><strong>PREÇO UNIT</strong></TableCell>
                <TableCell align="center"><strong>QTDE</strong></TableCell>
                <TableCell align="center"><strong>TOTAL</strong></TableCell>
                <TableCell align="center"><strong>EXCLUIR</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tabelaCorpo">
              {productsShop.map(row => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.valueFormatted}</TableCell>
                  <TableCell>
                    <div className={classes.controls} style={{ display: 'flex', flex: 'row', alignItems: "center", justifyContent: 'center' }}>
                      <IconButton onClick={() => diminuir(row.id)}>
                        <RemoveIcon />
                      </IconButton>

                      <Typography>
                        {row.qtde}
                      </Typography>

                      <IconButton onClick={() => aumentar(row.id)}>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="center">{FormatCurrency(row.value * row.qtde)}</TableCell>
                  <TableCell align="center"><Button onClick={() => excluir(row.id)}><ClearIcon /></Button></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="center"><strong>TOTAL:</strong></TableCell>
                <TableCell align="center">{FormatCurrency(total)}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.controls} style={{
          display: 'flex', flex: 'row', alignItems: "center", justifyContent: 'center', margin: '60px',
          height: '25px', borderCollapse: 'separate'
        }}>
          <button style={{ marginRight: '12px', borderRadius: '15px', width: '160px', height: '55px' }} onClick={() => handleOpen()}> <h3>Finalizar Compra</h3></button>
          <button style={{ marginLeft: '12px', borderRadius: '15px', width: '160px', height: '55px' }} onClick={() => navigateHome()}> <h3>Ver mais Produtos</h3></button>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} >
              <h2 id="transition-modal-title"> Sua compra foi realizada com sucesso.</h2>
              <p id="transition-modal-description"> Volte sempre!</p>
            </div>
          </Fade>
        </Modal>
      </div>
      <div style={productsShop.length === 0 ? { display: 'flex' } : { display: 'none' }} className={classes.semProduto}>
        <h1>Você ainda não adicionou nenhum produto</h1>

      </div>

    </div>


  );
}
