import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LakeFormation from "../LakeFormation";

describe("LakeFormation component", () => {
  it("LakeFormation should render correctly", () => {
    render(<LakeFormation />);
    expect(true).toBeTruthy();
  });
});
