import type { Meta, StoryObj } from "@storybook/react";
import MobileContent from "../MobileContent";

const meta: Meta<typeof MobileContent> = { title: "unDraw/MobileContent", component: MobileContent };

export default meta;
type Story = StoryObj<typeof MobileContent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
