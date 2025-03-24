import type { Meta, StoryObj } from "@storybook/react";
import Solidity from "../Solidity";

const meta: Meta<typeof Solidity> = { title: "SkillSet/Solidity", component: Solidity };

export default meta;
type Story = StoryObj<typeof Solidity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
