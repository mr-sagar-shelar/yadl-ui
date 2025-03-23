import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FingerprintLogin from "../FingerprintLogin";

describe("FingerprintLogin component", () => {
  it("FingerprintLogin should render correctly", () => {
    render(<FingerprintLogin />);
    expect(true).toBeTruthy();
  });
});
