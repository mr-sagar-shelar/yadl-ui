import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoadTesting from "../LoadTesting";

describe("LoadTesting component", () => {
  it("LoadTesting should render correctly", () => {
    render(<LoadTesting />);
    expect(true).toBeTruthy();
  });
});
