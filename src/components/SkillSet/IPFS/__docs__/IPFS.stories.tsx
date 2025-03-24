import type { Meta, StoryObj } from "@storybook/react";
import IPFS from "../IPFS";

const meta: Meta<typeof IPFS> = { title: "SkillSet/IPFS", component: IPFS };

export default meta;
type Story = StoryObj<typeof IPFS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
