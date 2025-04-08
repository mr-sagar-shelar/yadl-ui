import type { Meta, StoryObj } from "@storybook/react";
import TheWorldIsMine from "../TheWorldIsMine";

const meta: Meta<typeof TheWorldIsMine> = { title: "unDraw/TheWorldIsMine", component: TheWorldIsMine };

export default meta;
type Story = StoryObj<typeof TheWorldIsMine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
