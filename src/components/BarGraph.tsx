import { BarDatum, ResponsiveBar } from "@nivo/bar";

interface BarGraphProps {
  data: BarDatum[];
  keys: string[];
  indexBy: string;
}

function BarGraph({ data, keys, indexBy }: BarGraphProps) {
  return (
    <div className="w-full overflow-auto shadow border border-slate-100 rounded mb-8">
      <div className="h-[500px] min-w-[500px]">
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy={indexBy}
          margin={{ top: 25, right: 75, bottom: 50, left: 75 }}
          padding={0.2}
          layout="horizontal"
          groupMode="grouped"
          labelSkipWidth={40}
          label={(d) => `${d.value}%`}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
        />
      </div>
    </div>
  );
}
export default BarGraph;
