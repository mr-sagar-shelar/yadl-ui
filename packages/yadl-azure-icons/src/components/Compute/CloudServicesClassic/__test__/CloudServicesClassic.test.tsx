import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudServicesClassic from "../CloudServicesClassic";

describe("CloudServicesClassic component", () => {
  it("CloudServicesClassic should render correctly", () => {
    render(<CloudServicesClassic />);
    expect(true).toBeTruthy();
  });
});
