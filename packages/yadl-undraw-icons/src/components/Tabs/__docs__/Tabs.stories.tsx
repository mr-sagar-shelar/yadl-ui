import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "../Tabs";

const meta: Meta<typeof Tabs> = { title: "unDraw/Tabs", component: Tabs };

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
