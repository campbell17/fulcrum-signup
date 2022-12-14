import LayoutAppSidebar from '../../components/layout-appsidebar';
import DashboardContent from '../../components/app/dashboard-content';

export default function Home() {
  return (
    <LayoutAppSidebar>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <DashboardContent />      
      </div>
    </LayoutAppSidebar>
  )
}
