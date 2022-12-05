import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { statusText, message } = useRouteError();
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}
