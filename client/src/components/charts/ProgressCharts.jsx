import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { weeklyProgress } from '../../data/mockData';
import Card from '../ui/Card';

export function WeeklyProgressChart({ data = weeklyProgress }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-black">Weekly progress</h3>
      <div className="h-72">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="minutes" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} /><stop offset="95%" stopColor="#14b8a6" stopOpacity={0.05} /></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="minutes" stroke="#14b8a6" fill="url(#minutes)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function AccuracyChart({ data = weeklyProgress }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-black">Speaking accuracy</h3>
      <div className="h-72">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" />
            <YAxis domain={[60, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#f97316" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function AdminBars({ data = weeklyProgress }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-black">Platform learning minutes</h3>
      <div className="h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="minutes" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
