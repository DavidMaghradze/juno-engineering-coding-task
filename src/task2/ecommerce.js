////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

export const fetchAllOrders = async () => {
    const ids = allIds;
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
    
    const data = await Promise.all(ids.map( 
        async (id) => fetchOrderById(id)
    ))

    return data
};

export const bucketOrdersByUsers = async () => {
    let ordersByUsers = {};
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.

    const allOrders = await fetchAllOrders()

    allOrders.forEach( order => {
        const { userId } = order
        if(ordersByUsers[userId]) {
            ordersByUsers[userId] = [...ordersByUsers[userId], order]
            return
        }

        ordersByUsers = {
            ...ordersByUsers,
            [userId]: [order]
        }        
    })
    return ordersByUsers;
};

export const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.

    const orders = await fetchAllOrders()
    const last2WeeksOrders = orders.filter(order=>{
        const currentTimestamp = new Date()
        const timestamp2WeeksAgo = currentTimestamp - (1000 * 3600 * 24 * 14)

        if(timestamp2WeeksAgo <= order.timestamp) return order
    })
    console.log('ORDERS', orders)
    return last2WeeksOrders
};

export const bucketOrdersByDate = async () => {
    let ordersByDate = {};
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.

    const last2WeeksOrders = await getLast2WeeksOrders()
    last2WeeksOrders.forEach( order => {
        const { timestamp } = order
        const date = new Date(timestamp)

        const key = date.toString().split(' ').slice(0, 4).join(' ')
        
        if(ordersByDate[key]) {
            ordersByDate[key] = [...ordersByDate[key], order]
            return
        }

        ordersByDate[key] = [order]
    })

    return ordersByDate;
};

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
