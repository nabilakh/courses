const tabsData = [
  { value: "all", label: "All" },
  { value: "introductory", label: "Introductory" },
  { value: "advanced", label: "Advanced" },
  { value: "population", label: "Population Specific" },
];

export default function Tabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (params: string) => void;
}) {
  return (
    <div>
      <div className="flex gap-4">
        {tabsData.map(({ value, label }, idx) => (
          <div key={idx} className="text-sm font-bold mt-6">
            <button onClick={() => setActiveTab(value)}>{label}</button>
            {value === activeTab && (
              <div className="border-b-[3px] border-b-[#e48e8e] mt-5"></div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t-2 border-t-[#eeeae2] -mt-[2px]"></div>
    </div>
  );
}
