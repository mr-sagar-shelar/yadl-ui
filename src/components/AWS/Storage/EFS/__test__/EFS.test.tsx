import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EFS from "../EFS";

describe("EFS component", () => {
  it("EFS should render correctly", () => {
    render(<EFS />);
    expect(true).toBeTruthy();
  });
});
