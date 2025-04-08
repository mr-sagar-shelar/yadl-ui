import type { Meta, StoryObj } from "@storybook/react";
import MobileSearch from "../MobileSearch";

const meta: Meta<typeof MobileSearch> = { title: "unDraw/MobileSearch", component: MobileSearch };

export default meta;
type Story = StoryObj<typeof MobileSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
