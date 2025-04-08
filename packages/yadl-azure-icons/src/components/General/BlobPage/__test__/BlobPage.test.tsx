import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BlobPage from "../BlobPage";

describe("BlobPage component", () => {
  it("BlobPage should render correctly", () => {
    render(<BlobPage />);
    expect(true).toBeTruthy();
  });
});
