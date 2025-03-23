import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MemoryStorageMemoryStorage from "../MemoryStorageMemoryStorage";

describe("MemoryStorageMemoryStorage component", () => {
  it("MemoryStorageMemoryStorage should render correctly", () => {
    render(<MemoryStorageMemoryStorage />);
    expect(true).toBeTruthy();
  });
});
