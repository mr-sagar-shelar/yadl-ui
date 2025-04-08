import type { Meta, StoryObj } from "@storybook/react";
import CloudTpu from "../CloudTpu";

const meta: Meta<typeof CloudTpu> = { title: "GCP/CloudTpu", component: CloudTpu };

export default meta;
type Story = StoryObj<typeof CloudTpu>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
