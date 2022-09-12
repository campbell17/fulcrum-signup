import DashboardFavorites from "./dashboard-favorites"
import DashboardMetrics from "./dashboard-metrics"
import Popover from "./popover"
import WelcomeModal from "./welcome-modal"

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      <DashboardFavorites />
      <DashboardMetrics />
      <WelcomeModal />
      {/* <Popover /> */}
    </div>

  )
}