import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProcessExplorer from "../ProcessExplorer";

describe("ProcessExplorer component", () => {
  it("ProcessExplorer should render correctly", () => {
    render(<ProcessExplorer />);
    expect(true).toBeTruthy();
  });
});
