
import useAppStore from "../stores/app-store";
import { StatsComponent } from "../components/StatsComponent";

const StatsContainer = () => {

  const { reportFrequency, setReportFrequency } = useAppStore()

  return (
    <StatsComponent reportFrequency={reportFrequency} setReportFrequency={setReportFrequency} />
  )
}

export default StatsContainer;