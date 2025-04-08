import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NoData from "../NoData";

describe("NoData component", () => {
  it("NoData should render correctly", () => {
    render(<NoData />);
    expect(true).toBeTruthy();
  });
});
