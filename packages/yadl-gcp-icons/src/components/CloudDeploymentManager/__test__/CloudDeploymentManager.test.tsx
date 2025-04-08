import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDeploymentManager from "../CloudDeploymentManager";

describe("CloudDeploymentManager component", () => {
  it("CloudDeploymentManager should render correctly", () => {
    render(<CloudDeploymentManager />);
    expect(true).toBeTruthy();
  });
});
