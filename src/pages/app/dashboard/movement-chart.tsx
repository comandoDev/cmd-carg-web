import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const min = 60
const max = 1200

const data = [
  ...Array.from({ length: 30 }, (_, i) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return { date: `${i + 1}/12`, count: randomNumber }
  }),
]

export function MovementChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Movimentações no período
          </CardTitle>
          <CardDescription>Moviemntação diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis stroke="#888" axisLine={false} tickLine={false} width={40} />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              stroke={colors.violet[500]}
              type="linear"
              strokeWidth={2}
              dataKey="count"
            />
            <Tooltip
              animationEasing="ease-out"
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="flex flex-col gap-4 rounded-md border bg-background p-4">
                      <p className="text-lg font-medium">{label}</p>
                      <p className="text-sm text-violet-500">
                        Movimentações:
                        <span className="ml-2">{payload[0].value}</span>
                      </p>
                    </div>
                  )
                }
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
