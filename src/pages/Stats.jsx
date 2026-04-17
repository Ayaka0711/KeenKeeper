import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { useContext } from "react";

import { TimelineContext } from "../components/TimelineContext";
import Noactivity from "../components/Noactivity";

// Updated colors to match the screenshot provided
const COLORS = ["#8B5CF6", "#2D4F42", "#41A361"];

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const typeCount = {};
  timeline.forEach((item) => {
    const key = item.type || "unknown";
    typeCount[key] = (typeCount[key] || 0) + 1;
  });

  const chartData = Object.keys(typeCount).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: typeCount[key],
  }));

  if (chartData.length === 0) {
    return <Noactivity />;
  }

  return (
    <div className="mb-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Friendship Analytics</h2>
      <h3 className="text-lg font-semibold mb-4">By Interaction Type</h3>

     
      <div className="w-full min-w-0 h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
      
          <PieChart margin={{ bottom: -20 }}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={6}
              stroke="none"
              
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ 
                paddingTop: "0px", 
                fontSize: "15px",
                bottom: 5
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;