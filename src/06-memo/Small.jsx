import { memo } from "react";

export const Small = memo(({ value }) => {
  return <small className="text-white"> {value}</small>;
});
