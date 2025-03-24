import type { Meta, StoryObj } from "@storybook/react";
import Eclipse from "../Eclipse";

const meta: Meta<typeof Eclipse> = { title: "SkillSet/Eclipse", component: Eclipse };

export default meta;
type Story = StoryObj<typeof Eclipse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
