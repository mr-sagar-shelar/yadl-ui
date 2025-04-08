import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileEncryption from "../MobileEncryption";

describe("MobileEncryption component", () => {
  it("MobileEncryption should render correctly", () => {
    render(<MobileEncryption />);
    expect(true).toBeTruthy();
  });
});
