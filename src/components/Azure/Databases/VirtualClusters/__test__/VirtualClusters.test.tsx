import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualClusters from "../VirtualClusters";

describe("VirtualClusters component", () => {
  it("VirtualClusters should render correctly", () => {
    render(<VirtualClusters />);
    expect(true).toBeTruthy();
  });
});
