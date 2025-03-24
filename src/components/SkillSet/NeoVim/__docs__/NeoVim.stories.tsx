import type { Meta, StoryObj } from "@storybook/react";
import NeoVim from "../NeoVim";

const meta: Meta<typeof NeoVim> = { title: "SkillSet/NeoVim", component: NeoVim };

export default meta;
type Story = StoryObj<typeof NeoVim>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
