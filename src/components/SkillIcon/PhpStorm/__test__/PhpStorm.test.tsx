import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhpStorm from "../PhpStorm";

describe("PhpStorm component", () => {
  it("PhpStorm should render correctly", () => {
    render(<PhpStorm />);
    expect(true).toBeTruthy();
  });
});
