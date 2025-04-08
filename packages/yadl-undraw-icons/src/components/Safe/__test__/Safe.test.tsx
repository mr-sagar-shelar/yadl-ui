import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Safe from "../Safe";

describe("Safe component", () => {
  it("Safe should render correctly", () => {
    render(<Safe />);
    expect(true).toBeTruthy();
  });
});
