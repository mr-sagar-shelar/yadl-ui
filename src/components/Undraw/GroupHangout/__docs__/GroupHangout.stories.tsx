import type { Meta, StoryObj } from "@storybook/react";
import GroupHangout from "../GroupHangout";

const meta: Meta<typeof GroupHangout> = { title: "unDraw/GroupHangout", component: GroupHangout };

export default meta;
type Story = StoryObj<typeof GroupHangout>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
