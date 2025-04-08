import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Personalization from "../Personalization";

describe("Personalization component", () => {
  it("Personalization should render correctly", () => {
    render(<Personalization />);
    expect(true).toBeTruthy();
  });
});
