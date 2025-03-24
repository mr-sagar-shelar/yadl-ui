import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Proton from "../Proton";

describe("Proton component", () => {
  it("Proton should render correctly", () => {
    render(<Proton />);
    expect(true).toBeTruthy();
  });
});
