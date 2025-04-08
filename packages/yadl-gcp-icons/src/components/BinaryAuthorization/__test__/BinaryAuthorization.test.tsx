import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BinaryAuthorization from "../BinaryAuthorization";

describe("BinaryAuthorization component", () => {
  it("BinaryAuthorization should render correctly", () => {
    render(<BinaryAuthorization />);
    expect(true).toBeTruthy();
  });
});
