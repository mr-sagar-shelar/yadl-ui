import type { Meta, StoryObj } from "@storybook/react";
import LovingIt from "../LovingIt";

const meta: Meta<typeof LovingIt> = { title: "unDraw/LovingIt", component: LovingIt };

export default meta;
type Story = StoryObj<typeof LovingIt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
