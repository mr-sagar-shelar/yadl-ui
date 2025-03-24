import type { Meta, StoryObj } from "@storybook/react";
import TFSVCRepository from "../TFSVCRepository";

const meta: Meta<typeof TFSVCRepository> = { title: "Azure/General/TFSVCRepository", component: TFSVCRepository };

export default meta;
type Story = StoryObj<typeof TFSVCRepository>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
