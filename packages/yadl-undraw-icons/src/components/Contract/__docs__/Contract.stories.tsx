import type { Meta, StoryObj } from "@storybook/react";
import Contract from "../Contract";

const meta: Meta<typeof Contract> = { title: "unDraw/Contract", component: Contract };

export default meta;
type Story = StoryObj<typeof Contract>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
