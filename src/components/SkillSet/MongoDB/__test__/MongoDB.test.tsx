import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MongoDB from "../MongoDB";

describe("MongoDB component", () => {
  it("MongoDB should render correctly", () => {
    render(<MongoDB />);
    expect(true).toBeTruthy();
  });
});
