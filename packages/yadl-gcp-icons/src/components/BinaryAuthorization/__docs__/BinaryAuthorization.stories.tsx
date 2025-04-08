import type { Meta, StoryObj } from "@storybook/react";
import BinaryAuthorization from "../BinaryAuthorization";

const meta: Meta<typeof BinaryAuthorization> = { title: "GCP/BinaryAuthorization", component: BinaryAuthorization };

export default meta;
type Story = StoryObj<typeof BinaryAuthorization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
