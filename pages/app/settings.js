import LayoutAppSidebar from '../../components/layout-appsidebar';
import SettingsContent from '../../components/app/settings-content';

export default function Settings() {
  return (
    <LayoutAppSidebar>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <SettingsContent />      
      </div>  
    </LayoutAppSidebar>
  )
}
