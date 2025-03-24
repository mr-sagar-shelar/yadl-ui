import type { Meta, StoryObj } from "@storybook/react";
import V from "../V";

const meta: Meta<typeof V> = { title: "SkillSet/V", component: V };

export default meta;
type Story = StoryObj<typeof V>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
