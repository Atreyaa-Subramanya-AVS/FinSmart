"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Dashboard = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/dashboard/${user._id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [user]);

  if (!data) return <p>Loading...</p>;
  
  const pieChartData = Object.keys(data.categoryData).map(category => ({
    name: category,
    value: data.categoryData[category],
  }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Financial Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-xl">Income</h3>
          <p className="text-green-600 font-bold">${data.totalIncome}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-xl">Expenses</h3>
          <p className="text-red-600 font-bold">${data.totalExpense}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl">Balance</h3>
          <p className="text-blue-600 font-bold">${data.balance}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <BarChart width={400} height={300} data={pieChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>

        <PieChart width={400} height={300}>
          <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
