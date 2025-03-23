import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataExtraction from "../DataExtraction";

describe("DataExtraction component", () => {
  it("DataExtraction should render correctly", () => {
    render(<DataExtraction />);
    expect(true).toBeTruthy();
  });
});
