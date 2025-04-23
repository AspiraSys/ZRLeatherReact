import React from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CancelIcon from '@mui/icons-material/Cancel';
import { useCart } from '../../Context/CartContext';
import Wishlist from '../../Components/Additional/Wishlist';
import Bar from './Bar';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <>
      <Bar greyText='Cart' bgColor="#F5F5F5" breadCrumbs={true} breadText1='Product in your cart' breadText2='Wishlist' />
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 2, fontFamily: 'sans-serif' }}>
      

        {cartItems.length === 0 ? (
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Your cart is empty</Typography>
            <Button 
              variant="outlined"
              href="/Categories/footwear" 
              sx={{
                border: '2px solid rgb(187 187 187)',
                borderColor: 'rgb(191 191 191)',
                backgroundColor: 'var(--variant-outlinedBg)',
                color: '#000000',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: 16,
                '&:hover': {
                  backgroundColor: 'rgb(235 235 235)',
                },
              }}
            >
              Browse Products
            </Button>
          </Paper>
        ) : (
          <Paper elevation={3}>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: '#f5e9e9' }}>
                  <TableRow>
                    {['Image', 'Product Name', 'Price', 'Quantity', 'Total', ''].map((header, index) => (
                      <TableCell
                        key={index}
                        align="center"
                        sx={{ fontWeight: 'bold', fontSize: 16 }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell align="center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: 80, borderRadius: 4 }}
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 16, fontWeight: 500 }}>
                        {item.name}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 16, fontWeight: '500' }}>
                        ₹{item.price.toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #bbb',
                            borderRadius: 2,
                            width: 100,
                            height: 36,
                            mx: 'auto',
                            overflow: 'hidden'
                          }}
                        >
                          <Box
                            sx={{
                              borderRight: '1px solid #bbb',
                              flex: 1,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              sx={{ p: 0.5 }}
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                          </Box>
                          <Box
                            sx={{
                              borderRight: '1px solid #bbb',
                              flex: 1,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontWeight: 'bold',
                              fontSize: 15,
                            }}
                          >
                            {String(item.quantity).padStart(2, '0')}
                          </Box>
                          <Box
                            sx={{
                              flex: 1,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              sx={{ p: 0.5 }}
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: 16, fontWeight: 'bold' }}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => removeFromCart(item.id)}
                          sx={{
                            color: 'black',
                            '&:hover': { backgroundColor: '#f5e9e9' },
                            borderRadius: '50%',
                            padding: 1
                          }}
                        >
                          <CancelIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} />
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Total Price:
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                        ₹{totalPrice.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box display="flex" justifyContent="space-between" p={2}>
              <Button
                variant="outlined"
                href="/Categories/footwear" 
                sx={{
                  border: '2px solid rgb(187 187 187)',
                  borderColor: 'rgb(191 191 191)',
                  backgroundColor: 'var(--variant-outlinedBg)',
                  color: '#000000',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: 16,
                  '&:hover': {
                    backgroundColor: 'rgb(235 235 235)',
                  },
                }}
              >
                Continue Shopping
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: '3px solid rgb(187 187 187)',
                  borderColor: 'rgb(191 191 191)',
                  backgroundColor: 'var(--variant-outlinedBg)',
                  color: '#000000',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: 16,
                  '&:hover': {
                    backgroundColor: 'rgb(235 235 235)',
                  },
                }}
              >
                Place Order
              </Button>
            </Box>
          </Paper>
        )}

        <Box mt={4}>
          <Wishlist />
        </Box>
      </Box>
    </>
  );
}

export default Cart;