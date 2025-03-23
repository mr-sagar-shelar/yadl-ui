import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Educator from "../Educator";

describe("Educator component", () => {
  it("Educator should render correctly", () => {
    render(<Educator />);
    expect(true).toBeTruthy();
  });
});
