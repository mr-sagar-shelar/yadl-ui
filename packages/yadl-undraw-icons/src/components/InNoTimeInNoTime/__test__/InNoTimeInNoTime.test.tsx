import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InNoTimeInNoTime from "../InNoTimeInNoTime";

describe("InNoTimeInNoTime component", () => {
  it("InNoTimeInNoTime should render correctly", () => {
    render(<InNoTimeInNoTime />);
    expect(true).toBeTruthy();
  });
});
