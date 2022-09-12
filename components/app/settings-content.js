import SettingsTabs from "./settings-tabs"
import SettingsTable from "./settings-table"
import TableChecks from "./table-checks"

export default function SettingsContent() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Settings</h1>
      <div>
        <SettingsTabs />
        <TableChecks />
      </div>
    </div>
  )
}