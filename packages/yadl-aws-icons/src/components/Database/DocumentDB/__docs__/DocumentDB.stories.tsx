import type { Meta, StoryObj } from "@storybook/react";
import DocumentDB from "../DocumentDB";

const meta: Meta<typeof DocumentDB> = { title: "AWS/Database/DocumentDB", component: DocumentDB };

export default meta;
type Story = StoryObj<typeof DocumentDB>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
