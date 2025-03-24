import type { Meta, StoryObj } from "@storybook/react";
import SearchEngines from "../SearchEngines";

const meta: Meta<typeof SearchEngines> = { title: "unDraw/SearchEngines", component: SearchEngines };

export default meta;
type Story = StoryObj<typeof SearchEngines>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
