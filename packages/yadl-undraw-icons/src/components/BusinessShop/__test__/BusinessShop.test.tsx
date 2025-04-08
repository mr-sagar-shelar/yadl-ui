import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessShop from "../BusinessShop";

describe("BusinessShop component", () => {
  it("BusinessShop should render correctly", () => {
    render(<BusinessShop />);
    expect(true).toBeTruthy();
  });
});
