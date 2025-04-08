import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppInstallation from "../AppInstallation";

describe("AppInstallation component", () => {
  it("AppInstallation should render correctly", () => {
    render(<AppInstallation />);
    expect(true).toBeTruthy();
  });
});
