import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntuneForEducation from "../IntuneForEducation";

describe("IntuneForEducation component", () => {
  it("IntuneForEducation should render correctly", () => {
    render(<IntuneForEducation />);
    expect(true).toBeTruthy();
  });
});
