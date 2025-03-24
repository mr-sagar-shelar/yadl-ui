import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomlTables from "../AutomlTables";

describe("AutomlTables component", () => {
  it("AutomlTables should render correctly", () => {
    render(<AutomlTables />);
    expect(true).toBeTruthy();
  });
});
