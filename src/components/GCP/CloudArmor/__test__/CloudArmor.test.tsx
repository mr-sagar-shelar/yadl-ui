import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudArmor from "../CloudArmor";

describe("CloudArmor component", () => {
  it("CloudArmor should render correctly", () => {
    render(<CloudArmor />);
    expect(true).toBeTruthy();
  });
});
