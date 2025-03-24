import type { Meta, StoryObj } from "@storybook/react";
import Share from "../Share";

const meta: Meta<typeof Share> = { title: "unDraw/Share", component: Share };

export default meta;
type Story = StoryObj<typeof Share>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
