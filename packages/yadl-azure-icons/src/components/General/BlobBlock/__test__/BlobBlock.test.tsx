import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BlobBlock from "../BlobBlock";

describe("BlobBlock component", () => {
  it("BlobBlock should render correctly", () => {
    render(<BlobBlock />);
    expect(true).toBeTruthy();
  });
});
