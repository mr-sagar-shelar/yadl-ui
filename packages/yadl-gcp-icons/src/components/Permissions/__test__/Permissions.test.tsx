import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Permissions from "../Permissions";

describe("Permissions component", () => {
  it("Permissions should render correctly", () => {
    render(<Permissions />);
    expect(true).toBeTruthy();
  });
});
