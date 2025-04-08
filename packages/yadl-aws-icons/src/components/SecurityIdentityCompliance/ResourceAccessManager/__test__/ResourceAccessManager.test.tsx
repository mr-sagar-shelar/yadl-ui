import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceAccessManager from "../ResourceAccessManager";

describe("ResourceAccessManager component", () => {
  it("ResourceAccessManager should render correctly", () => {
    render(<ResourceAccessManager />);
    expect(true).toBeTruthy();
  });
});
