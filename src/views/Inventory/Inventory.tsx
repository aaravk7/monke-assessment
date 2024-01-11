import { useLoaderData } from "react-router-dom";
import ModelCard from "../../components/ModelCard";
import { IModel } from "../../types";

const InventoryPage = () => {
  const models = useLoaderData() as IModel[];

  return (
    <div className="container mx-auto py-8 px-8">
      <h2 className="text-center text-4xl font-bold py-8">Inventory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <ModelCard key={model.job_id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
