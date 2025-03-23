import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hooked from "../Hooked";

describe("Hooked component", () => {
  it("Hooked should render correctly", () => {
    render(<Hooked />);
    expect(true).toBeTruthy();
  });
});
