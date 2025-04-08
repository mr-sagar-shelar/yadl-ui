import type { Meta, StoryObj } from "@storybook/react";
import AppMesh from "../AppMesh";

const meta: Meta<typeof AppMesh> = { title: "AWS/NetworkingContentDelivery/AppMesh", component: AppMesh };

export default meta;
type Story = StoryObj<typeof AppMesh>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
