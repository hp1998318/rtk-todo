import React from "react";
import FilterButton from "./FilterButton";

import { VisibilityFilter } from "./visibilityFilterSlice";

export default function Footer(): JSX.Element {
  return (
    <div>
      <span>Show:</span>
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowActive}
        text={"Active"}
      ></FilterButton>
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowAll}
        text={"All"}
      ></FilterButton>
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowCompleted}
        text={"Completed"}
      ></FilterButton>
    </div>
  );
}
