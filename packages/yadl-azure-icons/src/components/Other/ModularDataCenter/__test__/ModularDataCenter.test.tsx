import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModularDataCenter from "../ModularDataCenter";

describe("ModularDataCenter component", () => {
  it("ModularDataCenter should render correctly", () => {
    render(<ModularDataCenter />);
    expect(true).toBeTruthy();
  });
});
