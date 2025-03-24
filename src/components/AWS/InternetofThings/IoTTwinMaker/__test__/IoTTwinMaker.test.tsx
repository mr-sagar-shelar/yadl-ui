import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTTwinMaker from "../IoTTwinMaker";

describe("IoTTwinMaker component", () => {
  it("IoTTwinMaker should render correctly", () => {
    render(<IoTTwinMaker />);
    expect(true).toBeTruthy();
  });
});
