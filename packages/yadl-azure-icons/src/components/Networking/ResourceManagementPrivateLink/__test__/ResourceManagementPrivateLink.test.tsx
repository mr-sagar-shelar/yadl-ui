import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceManagementPrivateLink from "../ResourceManagementPrivateLink";

describe("ResourceManagementPrivateLink component", () => {
  it("ResourceManagementPrivateLink should render correctly", () => {
    render(<ResourceManagementPrivateLink />);
    expect(true).toBeTruthy();
  });
});
