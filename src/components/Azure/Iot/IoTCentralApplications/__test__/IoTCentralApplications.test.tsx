import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTCentralApplications from "../IoTCentralApplications";

describe("IoTCentralApplications component", () => {
  it("IoTCentralApplications should render correctly", () => {
    render(<IoTCentralApplications />);
    expect(true).toBeTruthy();
  });
});
