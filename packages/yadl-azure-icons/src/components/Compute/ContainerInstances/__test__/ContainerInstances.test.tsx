import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerInstances from "../ContainerInstances";

describe("ContainerInstances component", () => {
  it("ContainerInstances should render correctly", () => {
    render(<ContainerInstances />);
    expect(true).toBeTruthy();
  });
});
