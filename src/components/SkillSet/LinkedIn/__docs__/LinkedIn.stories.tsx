import type { Meta, StoryObj } from "@storybook/react";
import LinkedIn from "../LinkedIn";

const meta: Meta<typeof LinkedIn> = { title: "SkillSet/LinkedIn", component: LinkedIn };

export default meta;
type Story = StoryObj<typeof LinkedIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
