import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActiveDirectoryConnectHealth from "../ActiveDirectoryConnectHealth";

describe("ActiveDirectoryConnectHealth component", () => {
  it("ActiveDirectoryConnectHealth should render correctly", () => {
    render(<ActiveDirectoryConnectHealth />);
    expect(true).toBeTruthy();
  });
});
