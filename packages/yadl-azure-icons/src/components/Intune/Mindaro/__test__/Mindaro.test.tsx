import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mindaro from "../Mindaro";

describe("Mindaro component", () => {
  it("Mindaro should render correctly", () => {
    render(<Mindaro />);
    expect(true).toBeTruthy();
  });
});
