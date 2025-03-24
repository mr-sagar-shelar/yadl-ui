import type { Meta, StoryObj } from "@storybook/react";
import NavigatorNavigator from "../NavigatorNavigator";

const meta: Meta<typeof NavigatorNavigator> = { title: "unDraw/NavigatorNavigator", component: NavigatorNavigator };

export default meta;
type Story = StoryObj<typeof NavigatorNavigator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
