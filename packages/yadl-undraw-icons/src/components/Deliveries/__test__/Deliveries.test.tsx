import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Deliveries from "../Deliveries";

describe("Deliveries component", () => {
  it("Deliveries should render correctly", () => {
    render(<Deliveries />);
    expect(true).toBeTruthy();
  });
});
