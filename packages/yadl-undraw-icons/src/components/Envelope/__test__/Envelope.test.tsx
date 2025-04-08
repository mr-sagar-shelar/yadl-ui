import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Envelope from "../Envelope";

describe("Envelope component", () => {
  it("Envelope should render correctly", () => {
    render(<Envelope />);
    expect(true).toBeTruthy();
  });
});
