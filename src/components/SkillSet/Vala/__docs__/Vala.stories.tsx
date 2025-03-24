import type { Meta, StoryObj } from "@storybook/react";
import Vala from "../Vala";

const meta: Meta<typeof Vala> = { title: "SkillSet/Vala", component: Vala };

export default meta;
type Story = StoryObj<typeof Vala>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
