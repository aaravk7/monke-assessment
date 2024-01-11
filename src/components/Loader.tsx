import CircularProgress from "@mui/joy/CircularProgress";

function Loader() {
  return (
    <div className="min-h-96 grid place-content-center">
      <CircularProgress />
    </div>
  );
}
export default Loader;
