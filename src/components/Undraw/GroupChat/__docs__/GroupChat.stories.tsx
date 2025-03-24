import type { Meta, StoryObj } from "@storybook/react";
import GroupChat from "../GroupChat";

const meta: Meta<typeof GroupChat> = { title: "unDraw/GroupChat", component: GroupChat };

export default meta;
type Story = StoryObj<typeof GroupChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
