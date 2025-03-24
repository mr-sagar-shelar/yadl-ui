import type { Meta, StoryObj } from "@storybook/react";
import Pinia from "../Pinia";

const meta: Meta<typeof Pinia> = { title: "SkillSet/Pinia", component: Pinia };

export default meta;
type Story = StoryObj<typeof Pinia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
