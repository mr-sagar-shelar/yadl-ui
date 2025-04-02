import type { Meta, StoryObj } from "@storybook/react";
import Mint from "../Mint";

const meta: Meta<typeof Mint> = { title: "SkillIcon/Mint", component: Mint };

export default meta;
type Story = StoryObj<typeof Mint>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
