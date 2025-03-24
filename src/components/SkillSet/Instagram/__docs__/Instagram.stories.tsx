import type { Meta, StoryObj } from "@storybook/react";
import Instagram from "../Instagram";

const meta: Meta<typeof Instagram> = { title: "SkillSet/Instagram", component: Instagram };

export default meta;
type Story = StoryObj<typeof Instagram>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
