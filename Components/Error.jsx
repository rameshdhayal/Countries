import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <h1 className="errorPage">
      OOps...Error {error.status} <br />
      Page { error.statusText }..
    </h1>
  );
}
