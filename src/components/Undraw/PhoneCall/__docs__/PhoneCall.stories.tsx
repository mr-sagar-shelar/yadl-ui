import type { Meta, StoryObj } from "@storybook/react";
import PhoneCall from "../PhoneCall";

const meta: Meta<typeof PhoneCall> = { title: "unDraw/PhoneCall", component: PhoneCall };

export default meta;
type Story = StoryObj<typeof PhoneCall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
