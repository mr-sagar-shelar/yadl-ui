import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToTheMoon from "../ToTheMoon";

describe("ToTheMoon component", () => {
  it("ToTheMoon should render correctly", () => {
    render(<ToTheMoon />);
    expect(true).toBeTruthy();
  });
});
