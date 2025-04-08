import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IceEdgeActions from "../IceEdgeActions";

describe("IceEdgeActions component", () => {
  it("IceEdgeActions should render correctly", () => {
    render(<IceEdgeActions />);
    expect(true).toBeTruthy();
  });
});
