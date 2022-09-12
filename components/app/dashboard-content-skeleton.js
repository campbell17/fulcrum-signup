import DashboardFavoritesSkeleton from "./dashboard-favorites-skeleton"
import DashboardMetricsSkeleton from "./dashboard-metrics-skeleton"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function DashboardContentSkeleton() {
  const router = useRouter()
  useEffect(() => {
      const timeout = setTimeout(() => {
          router.push('/app/dashboard')}, 2000)},)
  
  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      <DashboardFavoritesSkeleton />
      <DashboardMetricsSkeleton />
    </div>

  )
}