import { Link } from "react-router-dom";
import { IModel } from "../types";

interface ModelCardProps {
  model: IModel;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Link
      to={`/analysis/${model.model_name}`}
      className="border p-4 hover:border-blue-600 flex justify-between rounded shadow"
    >
      <div>{model.model_name}</div>
      <div>{model.model_type}</div>
    </Link>
  );
};

export default ModelCard;
