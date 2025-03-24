import type { Meta, StoryObj } from "@storybook/react";
import MobileApplication from "../MobileApplication";

const meta: Meta<typeof MobileApplication> = { title: "unDraw/MobileApplication", component: MobileApplication };

export default meta;
type Story = StoryObj<typeof MobileApplication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
