import { Params } from "react-router-dom";

import { getAnalysis } from "../../api/getAnalysis";
import { AnalysisData, ParsedAnalysisData } from "../../types";

export const AnalysisLoader = async ({
  params,
}: {
  params: Params<"modelName">;
}) => {
  if (params.modelName === undefined) return null;
  const response = await getAnalysis(params.modelName);
  if (response.data === null) return null;

  const parsedData = response.data.map((graph) => {
    const keys = graph[0].value as string[];
    const groups = graph.slice(1) as AnalysisData[];
    return {
      keys,
      data: groups.map((group) => {
        const item: ParsedAnalysisData = { origin: group.origin };
        Object.keys(group.value).forEach(
          (key) => (item[key] = (group.value[key] * 100).toFixed(2))
        );
        return item;
      }),
    };
  });
  return { modelName: params.modelName, data: parsedData };
};
