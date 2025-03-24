import type { Meta, StoryObj } from "@storybook/react";
import DecorateChristmasTree from "../DecorateChristmasTree";

const meta: Meta<typeof DecorateChristmasTree> = { title: "unDraw/DecorateChristmasTree", component: DecorateChristmasTree };

export default meta;
type Story = StoryObj<typeof DecorateChristmasTree>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
