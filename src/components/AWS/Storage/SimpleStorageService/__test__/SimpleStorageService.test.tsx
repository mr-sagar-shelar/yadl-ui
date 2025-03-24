import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SimpleStorageService from "../SimpleStorageService";

describe("SimpleStorageService component", () => {
  it("SimpleStorageService should render correctly", () => {
    render(<SimpleStorageService />);
    expect(true).toBeTruthy();
  });
});
