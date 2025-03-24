import type { Meta, StoryObj } from "@storybook/react";
import Rocket from "../Rocket";

const meta: Meta<typeof Rocket> = { title: "SkillSet/Rocket", component: Rocket };

export default meta;
type Story = StoryObj<typeof Rocket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
