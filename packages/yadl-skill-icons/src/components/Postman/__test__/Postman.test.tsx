import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Postman from "../Postman";

describe("Postman component", () => {
  it("Postman should render correctly", () => {
    render(<Postman />);
    expect(true).toBeTruthy();
  });
});
