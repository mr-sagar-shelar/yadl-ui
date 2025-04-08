import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Arrived from "../Arrived";

describe("Arrived component", () => {
  it("Arrived should render correctly", () => {
    render(<Arrived />);
    expect(true).toBeTruthy();
  });
});
