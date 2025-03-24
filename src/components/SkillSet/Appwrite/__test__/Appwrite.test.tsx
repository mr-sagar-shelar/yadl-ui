import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Appwrite from "../Appwrite";

describe("Appwrite component", () => {
  it("Appwrite should render correctly", () => {
    render(<Appwrite />);
    expect(true).toBeTruthy();
  });
});
