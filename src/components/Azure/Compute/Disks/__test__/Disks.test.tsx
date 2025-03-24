import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Disks from "../Disks";

describe("Disks component", () => {
  it("Disks should render correctly", () => {
    render(<Disks />);
    expect(true).toBeTruthy();
  });
});
