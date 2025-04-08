import type { Meta, StoryObj } from "@storybook/react";
import MobileDevelopment from "../MobileDevelopment";

const meta: Meta<typeof MobileDevelopment> = { title: "unDraw/MobileDevelopment", component: MobileDevelopment };

export default meta;
type Story = StoryObj<typeof MobileDevelopment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
