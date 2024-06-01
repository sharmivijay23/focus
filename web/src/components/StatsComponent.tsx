import Image from "next/image"

interface IStatsComponentProps {
  reportFrequency: string | undefined,
  setReportFrequency: (freq: string) => void,
}

export const StatsComponent = ({ reportFrequency, setReportFrequency }: IStatsComponentProps) => {

  const classes = "w-1/6 bg-gray-800 hover:text-gray-900 hover:bg-white rounded-lg px-4 py-2"
  const active_classes = "w-1/6 bg-accent hover:text-gray-900 hover:bg-white rounded-lg px-4 py-2"

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Stats </div>
      <div className="text-gray-400 pb-6">
        Monitor and analyze your performance metrics. Gain insights with detailed analytics and reports.
      </div>
      <div className="flex flex-row gap-4 items-stretch mb-4 pb-6">
        <button className={reportFrequency === "Daily" ? active_classes : classes} onClick={() => setReportFrequency("Daily")} >
          Daily
        </button>
        <button className={reportFrequency == "Weekly" ? active_classes : classes} onClick={() => setReportFrequency("Weekly")} >
          Weekly
        </button>
        <button className={reportFrequency == "Monthly" ? active_classes : classes} onClick={() => setReportFrequency("Monthly")}>
          Monthly
        </button>
        <button className={reportFrequency == "Yearly" ? active_classes : classes} onClick={() => setReportFrequency("Yearly")}>
          Yearly
        </button>
      </div>
      <div className="flex flex-row gap-10 mb-4 pb-6 text-gray-400">
        <div className="flex flex-col">
          <div>Focus Time </div>
          <div className="text-white font-semibold text-3xl"> 0m 0s</div>
        </div>
        <div className="flex flex-col">
          <div>Break Time </div>
          <div className="text-white font-semibold text-3xl"> 0m 0s</div>
        </div>
      </div>
      <Image
        src="/bar_graph.png"
        width={500}
        height={500}
        alt="Stat chart"
        className="brightness-50" />
    </div >
  )
}