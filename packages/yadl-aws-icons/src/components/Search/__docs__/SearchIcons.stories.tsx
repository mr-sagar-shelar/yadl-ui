import type { Meta, StoryObj } from "@storybook/react";
import SearchIcons from "../SearchIcons";
import React from "react";

const meta: Meta<typeof SearchIcons> = { title: "Search/SearchIcons", component: SearchIcons };

export default meta;
type Story = StoryObj<typeof SearchIcons>;

export const Primary: Story = {
  args: {
  },
  render: (args) => (
    <div style={{ height: "100%", width: "100%", overflow: "visible" }}>
      <SearchIcons />
    </div>
  ),
};
