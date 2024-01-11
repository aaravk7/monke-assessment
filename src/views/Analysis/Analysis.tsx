import { useLoaderData } from "react-router-dom";

import BarGraph from "../../components/BarGraph";
import { ParsedAnalysisData } from "../../types";

const Analysis = () => {
  const analysis = useLoaderData() as {
    modelName: string;
    data: {
      keys: string[];
      data: ParsedAnalysisData[];
    }[];
  } | null;

  if (!analysis)
    return (
      <div className="text-center py-8 text-4xl">Sorry ! Model Not Found</div>
    );
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl text-center font-bold pb-8">
        {analysis.modelName}
      </h1>
      {analysis.data.map((graph, index) => (
        <BarGraph
          key={index}
          keys={graph.keys}
          data={graph.data}
          indexBy="origin"
        />
      ))}
    </div>
  );
};

export default Analysis;
