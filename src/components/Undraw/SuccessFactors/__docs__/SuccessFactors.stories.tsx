import type { Meta, StoryObj } from "@storybook/react";
import SuccessFactors from "../SuccessFactors";

const meta: Meta<typeof SuccessFactors> = { title: "unDraw/SuccessFactors", component: SuccessFactors };

export default meta;
type Story = StoryObj<typeof SuccessFactors>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
