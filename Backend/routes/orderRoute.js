import express from 'express'
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus } from './../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


//Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


//Payment features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/place/razorpay', authUser, placeOrderRazorpay)
orderRouter.post('/place/stripe', authUser, placeOrderStripe)

//userFeatures

orderRouter.get('/userOrders', authUser, userOrders)

export default orderRouter