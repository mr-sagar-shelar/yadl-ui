import type { Meta, StoryObj } from "@storybook/react";
import ReactiveX from "../ReactiveX";

const meta: Meta<typeof ReactiveX> = { title: "SkillSet/ReactiveX", component: ReactiveX };

export default meta;
type Story = StoryObj<typeof ReactiveX>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
