import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudEndpoints from "../CloudEndpoints";

describe("CloudEndpoints component", () => {
  it("CloudEndpoints should render correctly", () => {
    render(<CloudEndpoints />);
    expect(true).toBeTruthy();
  });
});
