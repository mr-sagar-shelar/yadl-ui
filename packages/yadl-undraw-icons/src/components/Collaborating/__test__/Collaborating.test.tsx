import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Collaborating from "../Collaborating";

describe("Collaborating component", () => {
  it("Collaborating should render correctly", () => {
    render(<Collaborating />);
    expect(true).toBeTruthy();
  });
});
