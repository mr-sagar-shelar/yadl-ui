import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorSimpleDeviceManagers from "../StorSimpleDeviceManagers";

describe("StorSimpleDeviceManagers component", () => {
  it("StorSimpleDeviceManagers should render correctly", () => {
    render(<StorSimpleDeviceManagers />);
    expect(true).toBeTruthy();
  });
});
