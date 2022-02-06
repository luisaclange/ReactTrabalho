import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Menu from '../../components/Menu';

import { FormatCurrency } from '../../utils/formatCurrency';

import api from '../../services/api';

import { useStyles } from './styles';

function Home() {
  const navigation = useNavigate()
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data } = await api.get('/products');

    const formatData = data.map(prod => {
      return {...prod, value: FormatCurrency(prod.value)}
    })

    setProducts(formatData);
  }, []);

  const navigateProduct = (id) => {
    navigation(`/produto/${id}`)
  }

  return (
    <>
      <Menu />

      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardActionArea onClick={() => navigateProduct(product.id)}>
                <CardMedia 
                  component="img"
                  sx={{ pt: "56.25%" }}
                  image={product.image}
                  alt="random"
                  height={200}
                  width={200}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant='h5' component='h2'>
                  {product.title}
                  </Typography>

                  <Typography variant='h6' component='h3'>
                  {product.value}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;