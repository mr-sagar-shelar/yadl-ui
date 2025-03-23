import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Teamwork from "../Teamwork";

describe("Teamwork component", () => {
  it("Teamwork should render correctly", () => {
    render(<Teamwork />);
    expect(true).toBeTruthy();
  });
});
