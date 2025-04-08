import type { Meta, StoryObj } from "@storybook/react";
import MobileMessages from "../MobileMessages";

const meta: Meta<typeof MobileMessages> = { title: "unDraw/MobileMessages", component: MobileMessages };

export default meta;
type Story = StoryObj<typeof MobileMessages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
