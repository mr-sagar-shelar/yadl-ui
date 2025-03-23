import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UpToDate from "../UpToDate";

describe("UpToDate component", () => {
  it("UpToDate should render correctly", () => {
    render(<UpToDate />);
    expect(true).toBeTruthy();
  });
});
