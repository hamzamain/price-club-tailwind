import React from "react";
// import { Line, LineChart } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AssignmentMarks = () => {
  const data = [
    {
      name: "Page A",
      marks: 4000,
      quiz: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      marks: 3000,
      quiz: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      marks: 2000,
      quiz: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      marks: 2780,
      quiz: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      marks: 1890,
      quiz: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      marks: 2390,
      quiz: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      marks: 3490,
      quiz: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="mx-20 my-20">
      <LineChart width={1200} height={400} data={data}>
        <Line type={"monotone"} dataKey="quiz" stroke="#232323" />
        {/* <Line type="monotone" datakey="marks" />
         */}
        <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
        <XAxis dataKey={"name"} />
        <YAxis />

        <Tooltip />
        <CartesianGrid />
      </LineChart>
    </div>
  );
};

export default AssignmentMarks;
