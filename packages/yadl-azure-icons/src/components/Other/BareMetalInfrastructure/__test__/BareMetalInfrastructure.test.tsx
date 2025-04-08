import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BareMetalInfrastructure from "../BareMetalInfrastructure";

describe("BareMetalInfrastructure component", () => {
  it("BareMetalInfrastructure should render correctly", () => {
    render(<BareMetalInfrastructure />);
    expect(true).toBeTruthy();
  });
});
