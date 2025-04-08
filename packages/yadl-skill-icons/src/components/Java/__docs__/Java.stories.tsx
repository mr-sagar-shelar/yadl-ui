import type { Meta, StoryObj } from "@storybook/react";
import Java from "../Java";

const meta: Meta<typeof Java> = { title: "SkillIcon/Java", component: Java };

export default meta;
type Story = StoryObj<typeof Java>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
