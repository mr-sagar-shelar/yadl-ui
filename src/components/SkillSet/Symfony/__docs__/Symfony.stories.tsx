import type { Meta, StoryObj } from "@storybook/react";
import Symfony from "../Symfony";

const meta: Meta<typeof Symfony> = { title: "SkillSet/Symfony", component: Symfony };

export default meta;
type Story = StoryObj<typeof Symfony>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
