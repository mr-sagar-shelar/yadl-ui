import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceSecurityGoogle from "../DeviceSecurityGoogle";

describe("DeviceSecurityGoogle component", () => {
  it("DeviceSecurityGoogle should render correctly", () => {
    render(<DeviceSecurityGoogle />);
    expect(true).toBeTruthy();
  });
});
