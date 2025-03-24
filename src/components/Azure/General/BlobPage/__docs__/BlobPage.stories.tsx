import type { Meta, StoryObj } from "@storybook/react";
import BlobPage from "../BlobPage";

const meta: Meta<typeof BlobPage> = { title: "Azure/General/BlobPage", component: BlobPage };

export default meta;
type Story = StoryObj<typeof BlobPage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
