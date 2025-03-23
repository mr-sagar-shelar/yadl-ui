import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Doctors from "../Doctors";

describe("Doctors component", () => {
  it("Doctors should render correctly", () => {
    render(<Doctors />);
    expect(true).toBeTruthy();
  });
});
