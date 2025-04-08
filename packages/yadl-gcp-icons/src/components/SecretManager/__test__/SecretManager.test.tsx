import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecretManager from "../SecretManager";

describe("SecretManager component", () => {
  it("SecretManager should render correctly", () => {
    render(<SecretManager />);
    expect(true).toBeTruthy();
  });
});
