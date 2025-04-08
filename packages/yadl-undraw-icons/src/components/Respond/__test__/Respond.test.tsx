import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Respond from "../Respond";

describe("Respond component", () => {
  it("Respond should render correctly", () => {
    render(<Respond />);
    expect(true).toBeTruthy();
  });
});
