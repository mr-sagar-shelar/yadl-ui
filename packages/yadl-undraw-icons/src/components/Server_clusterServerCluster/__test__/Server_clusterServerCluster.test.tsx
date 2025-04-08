import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Server_clusterServerCluster from "../Server_clusterServerCluster";

describe("Server_clusterServerCluster component", () => {
  it("Server_clusterServerCluster should render correctly", () => {
    render(<Server_clusterServerCluster />);
    expect(true).toBeTruthy();
  });
});
