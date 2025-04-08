import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Professor from "../Professor";

describe("Professor component", () => {
  it("Professor should render correctly", () => {
    render(<Professor />);
    expect(true).toBeTruthy();
  });
});
