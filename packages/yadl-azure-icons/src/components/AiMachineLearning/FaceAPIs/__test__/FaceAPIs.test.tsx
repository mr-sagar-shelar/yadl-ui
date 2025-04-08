import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FaceAPIs from "../FaceAPIs";

describe("FaceAPIs component", () => {
  it("FaceAPIs should render correctly", () => {
    render(<FaceAPIs />);
    expect(true).toBeTruthy();
  });
});
