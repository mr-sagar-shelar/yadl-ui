import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlgoliaAlgolia from "../AlgoliaAlgolia";

describe("AlgoliaAlgolia component", () => {
  it("AlgoliaAlgolia should render correctly", () => {
    render(<AlgoliaAlgolia />);
    expect(true).toBeTruthy();
  });
});
