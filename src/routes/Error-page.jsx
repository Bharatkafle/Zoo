import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>OOPS! YOu did it Again</h1>
      <p>{error.statusText || error.messages}</p>
    </>
  );
};

export default ErrorPage;
