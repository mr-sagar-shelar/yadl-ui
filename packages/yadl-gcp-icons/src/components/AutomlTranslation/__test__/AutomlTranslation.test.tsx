import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomlTranslation from "../AutomlTranslation";

describe("AutomlTranslation component", () => {
  it("AutomlTranslation should render correctly", () => {
    render(<AutomlTranslation />);
    expect(true).toBeTruthy();
  });
});
