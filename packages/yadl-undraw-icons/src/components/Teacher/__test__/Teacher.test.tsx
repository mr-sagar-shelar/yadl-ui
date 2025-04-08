import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Teacher from "../Teacher";

describe("Teacher component", () => {
  it("Teacher should render correctly", () => {
    render(<Teacher />);
    expect(true).toBeTruthy();
  });
});
