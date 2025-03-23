import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Themeisle25 from "../Themeisle25";

describe("Themeisle25 component", () => {
  it("Themeisle25 should render correctly", () => {
    render(<Themeisle25 />);
    expect(true).toBeTruthy();
  });
});
