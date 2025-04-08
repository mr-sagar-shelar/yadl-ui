import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import React from "../React";

describe("React component", () => {
  it("React should render correctly", () => {
    render(<React />);
    expect(true).toBeTruthy();
  });
});
