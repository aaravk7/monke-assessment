export interface IModel {
  model_version: number;
  ts_start: number;
  ts_end: number;
  num_categorical: number;
  job_id: string;
  model_type: string;
  num_continuous: number;
  model_name: string;
  sk: string;
  ts_updated: number;
  pk?: string;
}

export interface AnalysisHeader {
  origin: string;
  value: string[];
  insight_name: string;
  name: string;
}

export interface AnalysisData {
  origin: string;
  value: {
    [key: string]: number;
  };
  insight_name: string;
  name: string;
}

export type ParsedAnalysisData = {
  origin: string;
} & { [key: string]: string };
