import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedServiceFabric from "../ManagedServiceFabric";

describe("ManagedServiceFabric component", () => {
  it("ManagedServiceFabric should render correctly", () => {
    render(<ManagedServiceFabric />);
    expect(true).toBeTruthy();
  });
});
