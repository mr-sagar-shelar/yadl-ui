import type { Meta, StoryObj } from "@storybook/react";
import AirSupport from "../AirSupport";

const meta: Meta<typeof AirSupport> = { title: "unDraw/AirSupport", component: AirSupport };

export default meta;
type Story = StoryObj<typeof AirSupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
