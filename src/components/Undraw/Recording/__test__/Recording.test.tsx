import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Recording from "../Recording";

describe("Recording component", () => {
  it("Recording should render correctly", () => {
    render(<Recording />);
    expect(true).toBeTruthy();
  });
});
