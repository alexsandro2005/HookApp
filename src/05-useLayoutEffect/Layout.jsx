import { QuoteMessage, LoadingQuote } from "../components/index";
import { useFetch, useCounter } from "../hooks/index";

export const Layout = () => {
  const { counter, incrementValue } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote, quote_id } = !!data && data[0];

  return (
    <div className="text-center align-items-center justify-content-center">
      <h1 className="text-white">Breaking Bad Quotes</h1>
      <hr />

      <div className="col align-items-center justify-content-center">
        {isLoading ? (
          <LoadingQuote />
        ) : (
          <QuoteMessage author={author} quote={quote}></QuoteMessage>
        )}
        <button
          onClick={() => incrementValue(quote_id)}
          className="btn btn-primary"
          disabled={isLoading}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
