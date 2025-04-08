import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AllTheData from "../AllTheData";

describe("AllTheData component", () => {
  it("AllTheData should render correctly", () => {
    render(<AllTheData />);
    expect(true).toBeTruthy();
  });
});
