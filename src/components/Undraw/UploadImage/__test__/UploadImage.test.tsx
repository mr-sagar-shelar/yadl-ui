import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UploadImage from "../UploadImage";

describe("UploadImage component", () => {
  it("UploadImage should render correctly", () => {
    render(<UploadImage />);
    expect(true).toBeTruthy();
  });
});
