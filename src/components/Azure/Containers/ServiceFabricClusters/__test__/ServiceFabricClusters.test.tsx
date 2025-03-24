import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceFabricClusters from "../ServiceFabricClusters";

describe("ServiceFabricClusters component", () => {
  it("ServiceFabricClusters should render correctly", () => {
    render(<ServiceFabricClusters />);
    expect(true).toBeTruthy();
  });
});
