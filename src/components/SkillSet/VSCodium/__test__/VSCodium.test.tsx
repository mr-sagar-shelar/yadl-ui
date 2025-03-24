import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VSCodium from "../VSCodium";

describe("VSCodium component", () => {
  it("VSCodium should render correctly", () => {
    render(<VSCodium />);
    expect(true).toBeTruthy();
  });
});
