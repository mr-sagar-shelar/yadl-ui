import type { Meta, StoryObj } from "@storybook/react";
import Hiking from "../Hiking";

const meta: Meta<typeof Hiking> = { title: "unDraw/Hiking", component: Hiking };

export default meta;
type Story = StoryObj<typeof Hiking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
