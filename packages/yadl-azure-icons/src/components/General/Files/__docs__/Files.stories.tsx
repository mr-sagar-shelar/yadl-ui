import type { Meta, StoryObj } from "@storybook/react";
import Files from "../Files";

const meta: Meta<typeof Files> = { title: "Azure/General/Files", component: Files };

export default meta;
type Story = StoryObj<typeof Files>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
