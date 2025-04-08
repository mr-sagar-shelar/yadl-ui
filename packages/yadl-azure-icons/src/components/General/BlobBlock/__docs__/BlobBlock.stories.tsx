import type { Meta, StoryObj } from "@storybook/react";
import BlobBlock from "../BlobBlock";

const meta: Meta<typeof BlobBlock> = { title: "Azure/General/BlobBlock", component: BlobBlock };

export default meta;
type Story = StoryObj<typeof BlobBlock>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
