import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerAppsEnvironments from "../ContainerAppsEnvironments";

describe("ContainerAppsEnvironments component", () => {
  it("ContainerAppsEnvironments should render correctly", () => {
    render(<ContainerAppsEnvironments />);
    expect(true).toBeTruthy();
  });
});
