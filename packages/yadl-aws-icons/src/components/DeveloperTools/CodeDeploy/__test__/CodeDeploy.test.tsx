import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeDeploy from "../CodeDeploy";

describe("CodeDeploy component", () => {
  it("CodeDeploy should render correctly", () => {
    render(<CodeDeploy />);
    expect(true).toBeTruthy();
  });
});
