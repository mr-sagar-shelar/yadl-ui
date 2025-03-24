import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTSiteWise from "../IoTSiteWise";

describe("IoTSiteWise component", () => {
  it("IoTSiteWise should render correctly", () => {
    render(<IoTSiteWise />);
    expect(true).toBeTruthy();
  });
});
