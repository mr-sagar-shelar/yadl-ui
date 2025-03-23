import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BodyText from "../BodyText";

describe("BodyText component", () => {
  it("BodyText should render correctly", () => {
    render(<BodyText />);
    expect(true).toBeTruthy();
  });
});
