import type { Meta, StoryObj } from "@storybook/react";
import Searching from "../Searching";

const meta: Meta<typeof Searching> = { title: "unDraw/Searching", component: Searching };

export default meta;
type Story = StoryObj<typeof Searching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
