import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LookoutforEquipment from "../LookoutforEquipment";

describe("LookoutforEquipment component", () => {
  it("LookoutforEquipment should render correctly", () => {
    render(<LookoutforEquipment />);
    expect(true).toBeTruthy();
  });
});
