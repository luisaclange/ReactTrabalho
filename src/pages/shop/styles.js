import { makeStyles } from '@material-ui/core/styles';
import shadows from '@material-ui/core/styles/shadows';


export const useStyles = makeStyles((theme) => ({
    tabelaExt: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabela: {


        width: '80%',

    },
    semProduto: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    },


}));


