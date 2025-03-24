import type { Meta, StoryObj } from "@storybook/react";
import Elixir from "../Elixir";

const meta: Meta<typeof Elixir> = { title: "SkillSet/Elixir", component: Elixir };

export default meta;
type Story = StoryObj<typeof Elixir>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
