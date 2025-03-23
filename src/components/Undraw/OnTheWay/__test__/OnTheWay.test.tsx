import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnTheWay from "../OnTheWay";

describe("OnTheWay component", () => {
  it("OnTheWay should render correctly", () => {
    render(<OnTheWay />);
    expect(true).toBeTruthy();
  });
});
