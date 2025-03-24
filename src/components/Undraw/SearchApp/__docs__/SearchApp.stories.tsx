import type { Meta, StoryObj } from "@storybook/react";
import SearchApp from "../SearchApp";

const meta: Meta<typeof SearchApp> = { title: "unDraw/SearchApp", component: SearchApp };

export default meta;
type Story = StoryObj<typeof SearchApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
