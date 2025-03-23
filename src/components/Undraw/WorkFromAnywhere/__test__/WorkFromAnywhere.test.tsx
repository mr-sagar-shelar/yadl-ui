import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkFromAnywhere from "../WorkFromAnywhere";

describe("WorkFromAnywhere component", () => {
  it("WorkFromAnywhere should render correctly", () => {
    render(<WorkFromAnywhere />);
    expect(true).toBeTruthy();
  });
});
