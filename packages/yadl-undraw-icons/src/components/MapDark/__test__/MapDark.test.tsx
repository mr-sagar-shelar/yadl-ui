import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MapDark from "../MapDark";

describe("MapDark component", () => {
  it("MapDark should render correctly", () => {
    render(<MapDark />);
    expect(true).toBeTruthy();
  });
});
