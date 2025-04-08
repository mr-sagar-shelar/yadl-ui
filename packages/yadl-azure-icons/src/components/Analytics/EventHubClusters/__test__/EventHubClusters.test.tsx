import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventHubClusters from "../EventHubClusters";

describe("EventHubClusters component", () => {
  it("EventHubClusters should render correctly", () => {
    render(<EventHubClusters />);
    expect(true).toBeTruthy();
  });
});
