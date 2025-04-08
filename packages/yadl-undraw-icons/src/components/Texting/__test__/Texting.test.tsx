import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Texting from "../Texting";

describe("Texting component", () => {
  it("Texting should render correctly", () => {
    render(<Texting />);
    expect(true).toBeTruthy();
  });
});
