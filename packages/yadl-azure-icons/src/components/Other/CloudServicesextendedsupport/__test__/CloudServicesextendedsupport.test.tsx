import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudServicesextendedsupport from "../CloudServicesextendedsupport";

describe("CloudServicesextendedsupport component", () => {
  it("CloudServicesextendedsupport should render correctly", () => {
    render(<CloudServicesextendedsupport />);
    expect(true).toBeTruthy();
  });
});
