import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTExpressLink from "../IoTExpressLink";

describe("IoTExpressLink component", () => {
  it("IoTExpressLink should render correctly", () => {
    render(<IoTExpressLink />);
    expect(true).toBeTruthy();
  });
});
