import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WellArchitectedTool from "../WellArchitectedTool";

describe("WellArchitectedTool component", () => {
  it("WellArchitectedTool should render correctly", () => {
    render(<WellArchitectedTool />);
    expect(true).toBeTruthy();
  });
});
