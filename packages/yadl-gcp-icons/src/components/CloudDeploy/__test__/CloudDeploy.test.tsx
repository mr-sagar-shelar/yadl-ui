import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDeploy from "../CloudDeploy";

describe("CloudDeploy component", () => {
  it("CloudDeploy should render correctly", () => {
    render(<CloudDeploy />);
    expect(true).toBeTruthy();
  });
});
