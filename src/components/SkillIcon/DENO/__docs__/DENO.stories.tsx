import type { Meta, StoryObj } from "@storybook/react";
import DENO from "../DENO";

const meta: Meta<typeof DENO> = { title: "SkillIcon/DENO", component: DENO };

export default meta;
type Story = StoryObj<typeof DENO>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
