import type { Meta, StoryObj } from "@storybook/react";
import Astro from "../Astro";

const meta: Meta<typeof Astro> = { title: "SkillSet/Astro", component: Astro };

export default meta;
type Story = StoryObj<typeof Astro>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
