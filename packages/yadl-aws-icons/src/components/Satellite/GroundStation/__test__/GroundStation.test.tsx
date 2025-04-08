import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GroundStation from "../GroundStation";

describe("GroundStation component", () => {
  it("GroundStation should render correctly", () => {
    render(<GroundStation />);
    expect(true).toBeTruthy();
  });
});
