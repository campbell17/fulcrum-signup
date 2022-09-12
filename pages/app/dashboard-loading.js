import LayoutAppSidebar from '../../components/layout-appsidebar';
import DashboardContentSkeleton from '../../components/app/dashboard-content-skeleton';

export default function DashboardLoading() {
  return (
    <LayoutAppSidebar>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <DashboardContentSkeleton />      
      </div>
    </LayoutAppSidebar>
  )
}
