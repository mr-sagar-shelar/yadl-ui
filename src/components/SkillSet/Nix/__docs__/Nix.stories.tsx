import type { Meta, StoryObj } from "@storybook/react";
import Nix from "../Nix";

const meta: Meta<typeof Nix> = { title: "SkillSet/Nix", component: Nix };

export default meta;
type Story = StoryObj<typeof Nix>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
