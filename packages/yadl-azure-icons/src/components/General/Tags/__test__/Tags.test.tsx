import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tags from "../Tags";

describe("Tags component", () => {
  it("Tags should render correctly", () => {
    render(<Tags />);
    expect(true).toBeTruthy();
  });
});
