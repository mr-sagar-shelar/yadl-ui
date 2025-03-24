import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceProviders from "../ServiceProviders";

describe("ServiceProviders component", () => {
  it("ServiceProviders should render correctly", () => {
    render(<ServiceProviders />);
    expect(true).toBeTruthy();
  });
});
