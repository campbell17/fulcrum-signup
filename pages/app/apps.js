import LayoutAppSidebar from '../../components/layout-appsidebar';
import AppsContent from '../../components/app/apps-content';

export default function Apps() {
  return (
    <LayoutAppSidebar>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <AppsContent />
      </div>
    </LayoutAppSidebar>
  )
}
