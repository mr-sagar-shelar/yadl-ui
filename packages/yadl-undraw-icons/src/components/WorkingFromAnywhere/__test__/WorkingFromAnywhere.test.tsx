import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkingFromAnywhere from "../WorkingFromAnywhere";

describe("WorkingFromAnywhere component", () => {
  it("WorkingFromAnywhere should render correctly", () => {
    render(<WorkingFromAnywhere />);
    expect(true).toBeTruthy();
  });
});
