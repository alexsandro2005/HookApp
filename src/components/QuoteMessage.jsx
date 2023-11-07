import { useLayoutEffect, useRef, useState } from "react";

export const QuoteMessage = ({ author, quote }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, []);
  return (
    <>
      <blockquote
        className="blockquoute text-center"
        style={{ display: "grid" }}
      >
        <p ref={pRef} className="mb-1 text-white">
          {quote}
        </p>
        <footer className="blockquoute-footer text-white">{author}</footer>
      </blockquote>

      <code> {JSON.stringify({ boxSize })}</code>
    </>
  );
};
