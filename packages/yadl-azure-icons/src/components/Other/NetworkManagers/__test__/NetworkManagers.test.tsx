import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkManagers from "../NetworkManagers";

describe("NetworkManagers component", () => {
  it("NetworkManagers should render correctly", () => {
    render(<NetworkManagers />);
    expect(true).toBeTruthy();
  });
});
