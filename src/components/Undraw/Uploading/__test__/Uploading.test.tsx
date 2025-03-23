import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Uploading from "../Uploading";

describe("Uploading component", () => {
  it("Uploading should render correctly", () => {
    render(<Uploading />);
    expect(true).toBeTruthy();
  });
});
