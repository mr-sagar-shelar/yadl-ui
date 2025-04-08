import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FTP from "../FTP";

describe("FTP component", () => {
  it("FTP should render correctly", () => {
    render(<FTP />);
    expect(true).toBeTruthy();
  });
});
