import { useRouteError } from "react-router-dom"; // This hook is given by react router dom.
// using this hook we can get more information about the error.

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
