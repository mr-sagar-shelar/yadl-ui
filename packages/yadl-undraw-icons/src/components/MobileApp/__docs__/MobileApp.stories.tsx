import type { Meta, StoryObj } from "@storybook/react";
import MobileApp from "../MobileApp";

const meta: Meta<typeof MobileApp> = { title: "unDraw/MobileApp", component: MobileApp };

export default meta;
type Story = StoryObj<typeof MobileApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
