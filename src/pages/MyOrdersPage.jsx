import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Simulate fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "143",
          createdAt: new Date(),
          shippingAddress: {
            city: "Delhi",
            country: "India",
          },
          orderItems: [
            {
              name: "Product1 ",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: "123",
          createdAt: new Date(),
          shippingAddress: {
            city: "Delhi",
            country: "India",
          },
          orderItems: [
            {
              name: "Product2 ",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: "423",
          createdAt: new Date(),
          shippingAddress: {
            houseNumber: "x-123",
            street: "6B",
            city: "Delhi",
            pinCode: 110053,
            country: "India",
          },
          orderItems: [
            {
              name: "Product3 ",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 150,
          isPaid: false,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 ">
        My Orders
      </h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-600 ">
          <thead className="bg-gray-200 text-xs uppercase text-gray-700">
            <tr>
              <th className=" py-2 px-4 sm:py-3 ">Image</th>
              <th className=" py-2 px-4 sm:py-3 ">Order ID</th>
              <th className=" py-2 px-4 sm:py-3 ">Created</th>
              <th className=" py-2 px-4 sm:py-3 ">Shipping Address</th>
              <th className=" py-2 px-4 sm:py-3 ">Items</th>
              <th className=" py-2 px-4 sm:py-3 ">Price</th>
              <th className=" py-2 px-4 sm:py-3 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:border-gray-50 cursor-pointer"
                >
                  <td className="p-2 sm:p-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12  object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap ">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:p-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="p-2 sm:p-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="p-2 sm:p-4">{order.orderItems.length}</td>
                  <td className="p-2 sm:p-4">{order.totalPrice}</td>
                  <td className="p-2 sm:p-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium `}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
