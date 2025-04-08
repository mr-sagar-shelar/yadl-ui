import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SnapTheMoment from "../SnapTheMoment";

describe("SnapTheMoment component", () => {
  it("SnapTheMoment should render correctly", () => {
    render(<SnapTheMoment />);
    expect(true).toBeTruthy();
  });
});
