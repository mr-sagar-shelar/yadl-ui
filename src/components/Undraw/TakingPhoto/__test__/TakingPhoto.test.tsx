import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TakingPhoto from "../TakingPhoto";

describe("TakingPhoto component", () => {
  it("TakingPhoto should render correctly", () => {
    render(<TakingPhoto />);
    expect(true).toBeTruthy();
  });
});
