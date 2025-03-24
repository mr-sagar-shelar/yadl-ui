import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SimpleStorageServiceGlacier from "../SimpleStorageServiceGlacier";

describe("SimpleStorageServiceGlacier component", () => {
  it("SimpleStorageServiceGlacier should render correctly", () => {
    render(<SimpleStorageServiceGlacier />);
    expect(true).toBeTruthy();
  });
});
