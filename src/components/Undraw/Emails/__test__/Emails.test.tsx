import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Emails from "../Emails";

describe("Emails component", () => {
  it("Emails should render correctly", () => {
    render(<Emails />);
    expect(true).toBeTruthy();
  });
});
