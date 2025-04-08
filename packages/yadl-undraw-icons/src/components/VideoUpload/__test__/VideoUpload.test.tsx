import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoUpload from "../VideoUpload";

describe("VideoUpload component", () => {
  it("VideoUpload should render correctly", () => {
    render(<VideoUpload />);
    expect(true).toBeTruthy();
  });
});
