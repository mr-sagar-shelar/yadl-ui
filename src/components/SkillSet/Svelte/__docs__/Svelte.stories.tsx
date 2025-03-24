import type { Meta, StoryObj } from "@storybook/react";
import Svelte from "../Svelte";

const meta: Meta<typeof Svelte> = { title: "SkillSet/Svelte", component: Svelte };

export default meta;
type Story = StoryObj<typeof Svelte>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
