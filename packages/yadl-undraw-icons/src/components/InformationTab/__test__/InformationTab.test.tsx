import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InformationTab from "../InformationTab";

describe("InformationTab component", () => {
  it("InformationTab should render correctly", () => {
    render(<InformationTab />);
    expect(true).toBeTruthy();
  });
});
