import React, { useEffect, useState } from 'react';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = 'USER_ID_FROM_AUTH'; // Replace with actual user ID from auth
    fetch(`http://localhost:5000/api/orders/${userId}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order #{order._id} - Total: ${order.total} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;