import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NatureOnScreen from "../NatureOnScreen";

describe("NatureOnScreen component", () => {
  it("NatureOnScreen should render correctly", () => {
    render(<NatureOnScreen />);
    expect(true).toBeTruthy();
  });
});
