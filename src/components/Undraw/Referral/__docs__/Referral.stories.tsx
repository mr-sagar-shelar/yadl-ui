import type { Meta, StoryObj } from "@storybook/react";
import Referral from "../Referral";

const meta: Meta<typeof Referral> = { title: "unDraw/Referral", component: Referral };

export default meta;
type Story = StoryObj<typeof Referral>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
