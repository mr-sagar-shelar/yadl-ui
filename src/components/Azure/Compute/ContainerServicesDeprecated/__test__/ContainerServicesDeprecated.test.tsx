import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerServicesDeprecated from "../ContainerServicesDeprecated";

describe("ContainerServicesDeprecated component", () => {
  it("ContainerServicesDeprecated should render correctly", () => {
    render(<ContainerServicesDeprecated />);
    expect(true).toBeTruthy();
  });
});
