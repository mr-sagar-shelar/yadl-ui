import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevOpsStarter from "../DevOpsStarter";

describe("DevOpsStarter component", () => {
  it("DevOpsStarter should render correctly", () => {
    render(<DevOpsStarter />);
    expect(true).toBeTruthy();
  });
});
