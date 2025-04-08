import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TakingSelfie from "../TakingSelfie";

describe("TakingSelfie component", () => {
  it("TakingSelfie should render correctly", () => {
    render(<TakingSelfie />);
    expect(true).toBeTruthy();
  });
});
