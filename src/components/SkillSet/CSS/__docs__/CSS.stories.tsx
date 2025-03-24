import type { Meta, StoryObj } from "@storybook/react";
import CSS from "../CSS";

const meta: Meta<typeof CSS> = { title: "SkillSet/CSS", component: CSS };

export default meta;
type Story = StoryObj<typeof CSS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
