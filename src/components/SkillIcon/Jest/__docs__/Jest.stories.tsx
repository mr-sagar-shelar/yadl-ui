import type { Meta, StoryObj } from "@storybook/react";
import Jest from "../Jest";

const meta: Meta<typeof Jest> = { title: "SkillIcon/Jest", component: Jest };

export default meta;
type Story = StoryObj<typeof Jest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
