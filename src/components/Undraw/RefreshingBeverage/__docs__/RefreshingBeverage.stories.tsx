import type { Meta, StoryObj } from "@storybook/react";
import RefreshingBeverage from "../RefreshingBeverage";

const meta: Meta<typeof RefreshingBeverage> = { title: "unDraw/RefreshingBeverage", component: RefreshingBeverage };

export default meta;
type Story = StoryObj<typeof RefreshingBeverage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
