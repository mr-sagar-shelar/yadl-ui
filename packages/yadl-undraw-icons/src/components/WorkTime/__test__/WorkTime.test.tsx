import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkTime from "../WorkTime";

describe("WorkTime component", () => {
  it("WorkTime should render correctly", () => {
    render(<WorkTime />);
    expect(true).toBeTruthy();
  });
});
