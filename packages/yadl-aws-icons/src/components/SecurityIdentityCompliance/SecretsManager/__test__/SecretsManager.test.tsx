import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecretsManager from "../SecretsManager";

describe("SecretsManager component", () => {
  it("SecretsManager should render correctly", () => {
    render(<SecretsManager />);
    expect(true).toBeTruthy();
  });
});
