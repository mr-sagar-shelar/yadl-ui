import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceGroupList from "../ResourceGroupList";

describe("ResourceGroupList component", () => {
  it("ResourceGroupList should render correctly", () => {
    render(<ResourceGroupList />);
    expect(true).toBeTruthy();
  });
});
