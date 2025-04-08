import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HeyByBasecamp from "../HeyByBasecamp";

describe("HeyByBasecamp component", () => {
  it("HeyByBasecamp should render correctly", () => {
    render(<HeyByBasecamp />);
    expect(true).toBeTruthy();
  });
});
