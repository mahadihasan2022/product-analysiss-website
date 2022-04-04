import React from "react";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart, XAxis, YAxis } from "recharts";

const DeshBord = () => {
  const data = [
    {
      month: "Mar",
      investment: 19,
      sell: 24,
      revenue: 10,
    },
    {
      month: "Apr",
      investment: 20,
      sell: 22,
      revenue: 24,
    },
    {
      month: "May",
      investment: 35,
      sell: 28,
      revenue: 29,
    },
    {
      month: "Jun",
      investment: 20,
      sell: 32,
      revenue: 32,
    },
    {
      month: "Jul",
      investment: 25,
      sell: 27,
      revenue: 30,
    },
    {
      month: "Aug",
      investment: 30,
      sell: 35,
      revenue: 39,
    },
  ];
  return (
    <div className="p-8 charts-container bg-blue-200">
      <h2 className="text-2xl font-bold text-center p-8">
        Its Our Website DeshBord.
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Investment Vs Revenue
          </h3>
          <LineChart width={500} height={350} data={data}>
            <Line dataKey={"investment"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"sell"}></YAxis>
            <Line dataKey={"revenue"}></Line>
          </LineChart>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center p-8">Sell Vs Revenue</h3>
          <BarChart width={500} height={400} data={data}>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"investment"}></YAxis>
            <Bar dataKey={"revenue"} barSize={30} fill="#8884d8"></Bar>
            <Bar dataKey={"sell"} barSize={30} fill="#2ff3d3"></Bar>
          </BarChart>
        </div>
        <div>
        <h3 className="text-xl font-bold text-center p-8">Month Vs Sell</h3>
          <AreaChart
            width={500} height={400} data={data}>
            <XAxis dataKey={'revenue'}></XAxis>
            <YAxis dataKey={'investment'} ></YAxis>
            <Area dataKey={'month'} stroke="#8884d8" fill="#8884d8"></Area>
            <Area dataKey={'sell'} stroke="#8884d8" fill="#8884d8"></Area>
          </AreaChart>
        </div>
        <div>
        <h3 className="text-xl font-bold text-center p-8">Investment Vs Sell</h3>
        <RadarChart outerRadius={90} width={500} height={400} data={data}>
  <PolarAngleAxis dataKey={'month'} ></PolarAngleAxis>
  <PolarRadiusAxis angle={30} domain={[0, 150]} ></PolarRadiusAxis>
  <Radar name="Mike" dataKey={'sell'} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} ></Radar>
  <Radar name="Lily" dataKey={'investment'} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} ></Radar>
</RadarChart>
        </div>
      </div>
    </div>
  );
};

export default DeshBord;
