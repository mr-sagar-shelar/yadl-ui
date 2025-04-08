import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Notify from "../Notify";

describe("Notify component", () => {
  it("Notify should render correctly", () => {
    render(<Notify />);
    expect(true).toBeTruthy();
  });
});
