import type { Meta, StoryObj } from "@storybook/react";
import Chilling from "../Chilling";

const meta: Meta<typeof Chilling> = { title: "unDraw/Chilling", component: Chilling };

export default meta;
type Story = StoryObj<typeof Chilling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
