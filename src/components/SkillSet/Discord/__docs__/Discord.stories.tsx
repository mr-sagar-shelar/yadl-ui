import type { Meta, StoryObj } from "@storybook/react";
import Discord from "../Discord";

const meta: Meta<typeof Discord> = { title: "SkillSet/Discord", component: Discord };

export default meta;
type Story = StoryObj<typeof Discord>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
