import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type HealthMetricsCardProps = {
  title: string
  value: string
  unit: string
  status: "normal" | "warning" | "alert"
  icon: React.ReactNode
  color: "teal" | "blue" | "amber" | "red" | "green" | "purple" | "rose"
}

const colorMap = {
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/50",
    text: "text-teal-800 dark:text-teal-300",
    border: "border-teal-200 dark:border-teal-800",
    statusNormal: "text-teal-600 dark:text-teal-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/50",
    text: "text-blue-800 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
    statusNormal: "text-blue-600 dark:text-blue-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/50",
    text: "text-amber-800 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
    statusNormal: "text-amber-600 dark:text-amber-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-900/50",
    text: "text-red-800 dark:text-red-300",
    border: "border-red-200 dark:border-red-800",
    statusNormal: "text-red-600 dark:text-red-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/50",
    text: "text-green-800 dark:text-green-300",
    border: "border-green-200 dark:border-green-800",
    statusNormal: "text-green-600 dark:text-green-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/50",
    text: "text-purple-800 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800",
    statusNormal: "text-purple-600 dark:text-purple-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/50",
    text: "text-rose-800 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800",
    statusNormal: "text-rose-600 dark:text-rose-400",
    statusWarning: "text-amber-600 dark:text-amber-400",
    statusAlert: "text-red-600 dark:text-red-400",
  },
}

export default function HealthMetricsCard({
  title,
  value,
  unit,
  status,
  icon,
  color = "teal",
}: HealthMetricsCardProps) {
  const colors = colorMap[color]

  const statusText = status === "normal" ? "Normal" : status === "warning" ? "Warning" : "Alert"
  const statusColor =
    status === "normal" ? colors.statusNormal : status === "warning" ? colors.statusWarning : colors.statusAlert

  return (
    <Card className={cn("health-metric-card border", colors.border)}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className={cn("p-2 rounded-lg", colors.bg)}>
            <div className={colors.text}>{icon}</div>
          </div>
          <div className={cn("text-xs font-medium px-2 py-1 rounded-full", statusColor, "bg-opacity-20")}>
            {statusText}
          </div>
        </div>

        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <div className="flex items-baseline">
          <span className={cn("text-2xl font-bold", colors.text)}>{value}</span>
          <span className="text-xs text-muted-foreground ml-1">{unit}</span>
        </div>
      </CardContent>
    </Card>
  )
}
